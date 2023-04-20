import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import { listProviders } from 'src/graphql/queries';
import {
  createProvider,
  deleteProvider,
  updateProvider
} from 'src/graphql/mutations';
import { success, error } from '../components/messages';

export const useProviderStore = defineStore('provider', {
  state: () => ({
    providers: [],
    providersLoading: false,
  }),
  getters: {
    providersSorted: (state) => {
      const items = [...state.providers].sort((a, b) => {
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
    async fetchProviders() {
      this.providersLoading = true;
      const allProviders = await API.graphql({
        query: listProviders,
      });
      this.providers =
        allProviders.data?.listProviders?.items;
      this.providersLoading = false;
    },
    async newProvider(input) {
      try {
        await API.graphql({
          query: createProvider,
          variables: { input: input },
        });
        success(`Provider ${input.name} created`);
        this.fetchProviders();
      } catch (err) {
        error('Something went wrong');
      }
    },
    async deleteProvider(input) {
      try {
        await API.graphql({
          query: deleteProvider,
          variables: { input: { id: input.id } },
        });
        success(`Provider ${input.name} deleted`);
        this.fetchProviders();
      } catch (err) {
        error('Something went wrong');
      }
    },
    async updateProvider(input) {
      try {
        await API.graphql({
          query: updateProvider,
          variables: { input: input },
        });
        success(`Provider ${input.name} updated`);
        this.fetchProviders();
      } catch (err) {
        error('Something went wrong');
      }
    },
  },
});
