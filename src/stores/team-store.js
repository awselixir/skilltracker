import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { getTeam } from 'src/graphql/queries';
import { listTeams } from 'src/graphql/customQueries';
import {
  createTeam,
  createUserTeam,
  deleteUserTeam,
  deleteTeam,
  updateTeam,
} from 'src/graphql/mutations';
import { success, error } from '../components/messages';

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
    async fetchMe(myId) {
      const me = await API.graphql({
        query: getTeam,
        variables: { id: myId },
      });
      this.me = me.data.getTeam;
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
    async deleteTeam(input, route) {
      try {
        await API.graphql({
          query: deleteTeam,
          variables: { input: { id: input.id } },
        });
        success(`Team ${input.name} deleted`);
        this.fetchTeams();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
    async deleteUserTeam(id) {
      try {
        await API.graphql({
          query: deleteUserTeam,
          variables: { input: { id: id } },
        });
        this.fetchTeams();
        success('User removed from team');
      } catch (err) {
        error('Something went wrong');
      }
    },
    async updateTeam(input, route) {
      const { users, ...newInput } = input;
      try {
        await API.graphql({
          query: updateTeam,
          variables: { input: newInput },
        });
        if (users.length > 0) {
          for (const user of users) {
            await this.newUserTeam({
              userId: user.id,
              teamId: newInput.id,
            });
          }
        }

        success(`Team ${input.name} updated`);
        this.fetchTeams();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
  },
});
