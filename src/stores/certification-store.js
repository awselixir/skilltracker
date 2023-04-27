import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { getCertification, listCertifications } from 'src/graphql/queries';
import {
  createCertification,
  deleteCertification,
  updateCertification,
} from 'src/graphql/mutations';
import { error } from '../components/messages';

export const useCertificationStore = defineStore('certification', {
  state: () => ({
    certifications: [],
    certificationsLoading: false,
  }),
  getters: {
    certificationsSorted: (state) => {
      const items = [...state.certifications].sort((a, b) => {
        const nameA = a.shortName.toUpperCase();
        const nameB = b.shortName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      return items;
    },
  },
  actions: {
    async fetchCertification(id) {
      try {
        const cert = await API.graphql({
          query: getCertification,
          variables: { id: id },
        });

        return cert;
      } catch (err) {
        error('Something went wrong');
      }
    },
    async fetchCertifications() {
      this.certificationsLoading = true;
      const allCertifications = await API.graphql({
        query: listCertifications,
      });
      this.certifications = allCertifications.data?.listCertifications?.items;
      this.certificationsLoading = false;
    },
    async newCert(input) {
      return await API.graphql({
        query: createCertification,
        variables: { input: input },
      });
    },
    async deleteCert(input) {
      return await API.graphql({
        query: deleteCertification,
        variables: { input: { id: input.id } },
      });
    },
    async updateCert(input) {
      return await API.graphql({
        query: updateCertification,
        variables: { input: input },
      });
    },
  },
});
