import { defineStore } from 'pinia';
import { orderBy } from 'lodash';
import { useCertificationStore } from './certification-store';
import { API } from 'aws-amplify';
import { getUser, listUsers } from 'src/graphql/customQueries';
import {
  createUser,
  createUserCertification,
  deleteUser,
  deleteUserCertification,
  updateUser,
} from 'src/graphql/mutations';
import { success, error } from '../components/messages';

const certificationStore = useCertificationStore();

export const useUserStore = defineStore('user', {
  state: () => ({
    me: {
      firstName: '',
      lastName: '',
    },
    isAdmin: false,
    users: [],
    usersLoading: false,
  }),
  getters: {
    usersSortedByName: (state) => {
      return orderBy(state.users, 'firstName', 'asc');
    },
  },
  // getters: {
  //   usersSorted: (state) => {
  //     const items = [...state.users].sort((a, b) => {
  //       const nameA = a.shortName.toUpperCase()
  //       const nameB = b.shortName.toUpperCase()
  //       if (nameA < nameB) {
  //         return -1
  //       }
  //       if (nameA > nameB) {
  //         return 1
  //       }

  //       return 0
  //     })

  //     return items
  //   }
  // },
  actions: {
    async fetchMe(myId) {
      const me = await API.graphql({
        query: getUser,
        variables: { id: myId },
      });
      this.me = me.data.getUser;
    },
    async fetchUsers() {
      this.usersLoading = true;
      const allUsers = await API.graphql({
        query: listUsers,
      });
      this.users = allUsers.data?.listUsers?.items;
      this.usersLoading = false;
    },
    async fetchUser(id) {
      return await API.graphql({
        query: getUser,
        variables: { id: id },
      });
    },
    async newUser(input, route) {
      try {
        await API.graphql({
          query: createUser,
          variables: { input: input },
        });
        success(`User ${input.name} created`);
        this.fetchUsers();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
    async newUserCertification(input) {
      await API.graphql({
        query: createUserCertification,
        variables: { input: input },
      });
      await Promise.allSettled([
        certificationStore.fetchCertifications(),
        this.fetchUsers(),
      ]);
    },
    async deleteUserCert(id) {
      await API.graphql({
        query: deleteUserCertification,
        variables: { input: { id: id } },
      });
      await Promise.allSettled([
        certificationStore.fetchCertifications(),
        this.fetchUsers(),
      ]);
    },
    async deleteUser(input, route) {
      try {
        await API.graphql({
          query: deleteUser,
          variables: { input: { id: input.id } },
        });
        success(`User ${input.name} deleted`);
        this.fetchUsers();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
    async updateUser(input) {
      return await API.graphql({
        query: updateUser,
        variables: { input: input },
      });
    },
  },
});
