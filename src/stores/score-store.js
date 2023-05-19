import { defineStore } from 'pinia';
import { useCertificationStore } from './certification-store';
//import { useProviderStore } from './provider-store';
import { useSkillStore } from './skill-store';
import { useUserStore } from './user-store';
import states from 'src/shared/states';
import { orderBy } from 'lodash';

const certStore = useCertificationStore();
//const providerStore = useProviderStore()
const skillStore = useSkillStore();
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
      const certsArray = certStore.certifications.map((cert) => {
        return {
          name: cert.shortName,
          value: cert.users.items.length,
        };
      });

      return orderBy(certsArray, 'value', 'desc')
        .filter((item) => item.value != 0)
        .slice(0, 10);
    },
    totalSkills: () => {
      return skillStore.skills.reduce(
        (acc, skill) => acc + skill.users.items.length,
        0
      );
    },
    skillsTreemap() {
      return skillStore.skills.map((skill) => {
        return {
          name: skill.shortName,
          value: skill.users.items.length,
        };
      }).filter(item => item.value > 1);
    },
    totalScore: () => {
      const certifiedUsers = userStore.users.filter(
        (user) => user.certifications.items.length > 0
      );

      const certsScore = certifiedUsers.reduce((total, user) => {
        const sum = user.certifications.items.reduce(
          (acc, cert) => acc + cert.certification.certificationLevel.score,
          0
        );
        return sum + total;
      }, 0);

      const skilledUsers = userStore.users.filter(
        (user) => user.skills.items.length > 0
      );
      const skillsScore = skilledUsers.reduce((total, user) => {
        const sum = user.skills.items.reduce(
          (acc, skill) => acc + skillStore.skillsScores[skill.level],
          0
        );
        return sum + total;
      }, 0);

      return skillsScore + certsScore;
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
        const certScore = user.certifications.items.reduce(
          (acc, cert) => acc + cert.certification.certificationLevel.score,
          0
        );

        const skillScore = user.skills.items.reduce(
          (acc, skill) => acc + skillStore.skillsScores[skill.level],
          0
        );

        usaStates[user.state] =
          usaStates[user.state] + (certScore + skillScore);
      }
      const usaStatesArray = Object.entries(usaStates).map(([key, value]) => {
        return {
          name: key,
          value: value,
        };
      });

      return usaStatesArray.filter((item) => item.name != 'null');
    },
    scoreByStateMax() {
      return Math.max(this.scoreByState.map((item) => item.value));
    },
  },
});
