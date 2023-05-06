/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import {
  getCertification,
  listCertifications,
} from 'src/graphql/customQueries';
import {
  createCertification,
  deleteCertification,
  updateCertification,
} from 'src/graphql/mutations';
import { error } from '../components/messages';
import _ from 'lodash';

export const useCertificationStore = defineStore('certification', {
  state: () => ({
    certifications: [],
    certificationsLoading: false,
  }),
  getters: {
    certificationsSorted: (state) => {
      return _.orderBy(state.certifications, 'name', 'asc');
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

      if(allCertifications.data) {
        this.certifications = allCertifications.data?.listCertifications?.items;
      this.certificationsLoading = false;
      }
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
