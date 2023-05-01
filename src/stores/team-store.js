import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { getTeam, listTeams } from 'src/graphql/customQueries';
import {
  createTeam,
  createUserTeam,
  deleteUserTeam,
  deleteTeam,
  updateTeam,
} from 'src/graphql/mutations';
import { error } from '../components/messages';

export const useTeamStore = defineStore('team', {
  state: () => ({
    teams: [],
    teamsLoading: false,
  }),
  // getters: {
  //   teamsSorted: (state) => {
  //     const items = [...state.teams].sort((a, b) => {
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
    async fetchTeam(id) {
      try {
        const team = await API.graphql({
          query: getTeam,
          variables: { id: id },
        });

        return team;
      } catch (err) {
        error('Something went wrong');
      }
    },
    async fetchTeams() {
      this.teamsLoading = true;
      const allTeams = await API.graphql({
        query: listTeams,
      });
      this.teams = allTeams.data?.listTeams?.items;
      this.teamsLoading = false;
    },
    async newTeam(input) {
      const { users, ...newInput } = input;

      const teamResult = await API.graphql({
        query: createTeam,
        variables: { input: newInput },
      });

      if (users.length > 0) {
        const usersList = users.map((user) => {
          this.newUserTeam({
            userId: user.id,
            teamId: teamResult.data.createTeam.id,
            owner: user.id,
          });
        });

        await Promise.allSettled(usersList);
        // for (const user of users) {
        //   await this.newUserTeam({
        //     userId: user.id,
        //     teamId: teamResult.data.createTeam.id,
        //     owner: user.id,
        //   });
        // }
      }
    },
    async newUserTeam(input) {
      await API.graphql({
        query: createUserTeam,
        variables: { input: input },
      });
    },
    async deleteTeam(input) {
      if (input.existingUsers.length > 0) {
        const usersList = input.existingUsers.map((userTeam) => {
          this.deleteUserTeam(userTeam.id);
        });

        await Promise.all(usersList);
      }
      await API.graphql({
        query: deleteTeam,
        variables: { input: { id: input.id } },
      });
    },
    async deleteUserTeam(id) {
      return await API.graphql({
        query: deleteUserTeam,
        variables: { input: { id: id } },
      });
    },
    async updateTeam(input) {
      const { users, ...newInput } = input;

      await API.graphql({
        query: updateTeam,
        variables: { input: newInput },
      });
      if (users.length > 0) {
        const usersList = users.map((user) => {
          this.newUserTeam({
            userId: user.id,
            teamId: input.id,
            owner: user.id,
          });
        });

        await Promise.allSettled(usersList);
      }
    },
  },
});
