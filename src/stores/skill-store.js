import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { listSkills, getSkill } from 'src/graphql/queries';
import { createSkill, deleteSkill, updateSkill } from 'src/graphql/mutations';
import { error } from '../components/messages';
import _ from 'lodash';

export const useSkillStore = defineStore('skill', {
  state: () => ({
    skills: [],
    skillsLoading: false,
    skillsScores: {
      l1: 1,
      l2: 2,
      l3: 3,
    },
  }),
  getters: {
    skillsSorted: (state) => {
      return _.orderBy(state.skills, 'name', 'asc');
    },
  },
  actions: {
    async fetchSkill(id) {
      try {
        const skill = await API.graphql({
          query: getSkill,
          variables: { id: id },
        });

        return skill;
      } catch (err) {
        error('Something went wrong');
      }
    },
    async fetchSkills() {
      this.skillsLoading = true;
      const allSkills = await API.graphql({
        query: listSkills,
      });
      this.skills = allSkills.data?.listSkills?.items;
      this.skillsLoading = false;
    },
    async newSkill(input) {
      return await API.graphql({
        query: createSkill,
        variables: { input: input },
      });
    },
    async deleteSkill(input) {
      return await API.graphql({
        query: deleteSkill,
        variables: { input: { id: input.id } },
      });
    },
    async updateSkill(input) {
      return await API.graphql({
        query: updateSkill,
        variables: { input: input },
      });
    },
  },
});
