import { defineStore } from 'pinia';
import { useCertificationStore } from './certification-store';
//import { useProviderStore } from './provider-store';
import { useUserStore } from './user-store';
import states from 'src/shared/states';
import { orderBy} from 'lodash'

const certStore = useCertificationStore();
//const providerStore = useProviderStore()
const userStore = useUserStore();

export const useScoreStore = defineStore('score', {
  state: () => ({
    dashboardLoading: true,
  }),
  getters: {
    totalCerts: () => {
      return certStore.certifications.reduce(
        (acc, cert) => acc + cert.users.items.length,
        0
      );
    },
    topCerts: () => {
      const certsArray = certStore.certifications.map(cert => {
        return {
          name: cert.shortName,
          value: cert.users.items.length
        }
      })

      return orderBy(certsArray, 'value', 'desc').filter(item => item.value != 0).slice(0, 10)
    },
    // topProviders: () => {
    //   const providersArray = providerStore.providers.map
    // }
    totalScore: () => {
      return certStore.certifications.reduce(
        (acc, cert) =>
          acc + cert.certificationLevel.score * cert.users.items.length,
        0
      );
    },
    certifiedUsers: () => {
      return userStore.users.reduce(
        (acc, user) => acc + (user.certifications.items.length > 0 ? 1 : 0),
        0
      );
    },
    scoreByState: () => {
      const usaStates = {};
      states.forEach((state) => (usaStates[state] = 0));

      for (const user of userStore.users) {
        const userScore = user.certifications.items.reduce(
          (acc, cert) => acc + cert.certification.certificationLevel.score,
          0
        );
        usaStates[user.state] = userScore;
      }
      const usaStatesArray = Object.entries(usaStates).map(([key, value]) => {
        return {
          name: key,
          value: value,
        };
      });

      return usaStatesArray;
    },
    scoreByStateMax() {
      return Math.max(...this.scoreByState.map((item) => item.value));
    },
  },
});