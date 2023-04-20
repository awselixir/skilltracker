import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { listCertifications } from 'src/graphql/queries';
import {
  createCertification,
  deleteCertification,
  updateCertification
} from 'src/graphql/mutations';
import { success, error } from '../components/messages';

export const useCertificationStore = defineStore('certification', {
  state: () => ({
    certifications: [],
    certificationsLoading: false,
  }),
  getters: {
    certificationsSorted: (state) => {
      const items = [...state.certifications].sort((a, b) => {
        const nameA = a.shortName.toUpperCase()
        const nameB = b.shortName.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      })

      return items
    }
  },
  actions: {
    async fetchCertifications() {
      this.certificationsLoading = true;
      const allCertifications = await API.graphql({
        query: listCertifications,
      });
      this.certifications =
        allCertifications.data?.listCertifications?.items;
      this.certificationsLoading = false;
    },
    async newCertification(input, route) {
      try {
        await API.graphql({
          query: createCertification,
          variables: { input: input },
        });
        success(`Certification ${input.name} created`);
        this.fetchCertifications();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
    async deleteCertification(input, route) {
      try {
        await API.graphql({
          query: deleteCertification,
          variables: { input: { id: input.id } },
        });
        success(`Certification ${input.name} deleted`);
        this.fetchCertifications();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
    async updateCertification(input, route) {
      try {
        await API.graphql({
          query: updateCertification,
          variables: { input: input },
        });
        success(`Certification ${input.name} updated`);
        this.fetchCertifications();
        this.router.push(route);
      } catch (err) {
        error('Something went wrong');
      }
    },
  },
});
