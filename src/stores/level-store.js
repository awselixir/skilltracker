import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { listCertificationLevels } from 'src/graphql/queries';
import {
  createCertificationLevel,
  deleteCertificationLevel,
  updateCertificationLevel
} from 'src/graphql/mutations';
import { success, error } from '../components/messages';

export const useLevelStore = defineStore('level', {
  state: () => ({
    certsLevels: [],
    certLevelModal: true,
    certLevelsLoading: false,
  }),
  actions: {
    async fetchCertsLevels() {
      this.certLevelsLoading = true;
      const allCertificationLevels = await API.graphql({
        query: listCertificationLevels,
      });
      this.certsLevels =
        allCertificationLevels.data?.listCertificationLevels?.items;
      this.certLevelsLoading = false;
    },
    async newCertLevel(input) {
      try {
        await API.graphql({
          query: createCertificationLevel,
          variables: { input: input },
        });
        success(`Cert level ${input.name} created`);
        this.fetchCertsLevels();
      } catch (err) {
        error('Something went wrong');
      }
    },
    async deleteCertLevel(input) {
      try {
        await API.graphql({
          query: deleteCertificationLevel,
          variables: { input: { id: input.id } },
        });
        success(`Cert level ${input.name} deleted`);
        this.fetchCertsLevels();
      } catch (err) {
        error('Something went wrong');
      }
    },
    async updateCertLevel(input) {
      try {
        await API.graphql({
          query: updateCertificationLevel,
          variables: { input: input },
        });
        success(`Cert level ${input.name} updated`);
        this.fetchCertsLevels();
      } catch (err) {
        error('Something went wrong');
      }
    },
    delay(t) {
      return new Promise((r) => setTimeout(r, t));
    },
    async returnTo() {
      this.certLevelModal = false;
      await this.delay(500);
      this.router.push({ name: 'levels' });
      this.certLevelModal = true;
    },
  },
});
