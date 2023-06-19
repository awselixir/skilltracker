/* eslint-disable @typescript-eslint/no-explicit-any */
import { calculateTeamsAverage, calculateTeamsCerts, calculateTeamsScore, calculateTeamsSkills, calculateUserScore } from './functions';
import { useSkillStore } from 'src/stores/skill-store';

const skillStore = useSkillStore();

export const certsPageColumns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'provider',
    field: (row) => row.provider.shortName,
    label: 'Provider',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'level',
    field: (row) => row.certificationLevel.name,
    label: 'Level',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'earned',
    field: (row) => (row.users.items.length > 0 ? row.users.items.length : '-'),
    label: 'Earned',
    required: true,
    align: 'center',
    sortable: true,
  },
];

export const skillsPageColumns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'provider',
    field: (row) => row.provider.shortName,
    label: 'Provider',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'users',
    field: (row) => (row.users.items.length > 0 ? row.users.items.length : '-'),
    label: 'Users',
    required: true,
    align: 'center',
    sortable: true,
  },
];

export const userPageCertsColumns = [
  {
    name: 'name',
    field: (row) => row.certification.name,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'delete',
    field: '',
    label: '',
    required: false,
    align: 'center',
    sortable: true,
  },
]

export const userPageSkillsColumns = [
  {
    name: 'name',
    field: (row) => row.skill.name,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'level',
    field: (row) => row.level,
    label: 'Level',
    required: false,
    align: 'center',
    sortable: true,
  },
  {
    name: 'delete',
    field: '',
    label: '',
    required: false,
    align: 'center',
    sortable: true,
  },
];

export const usersLeaderboardColumns = [
  {
    name: 'name',
    field: (row) => `${row.firstName} ${row.lastName}`,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: false,
  },
  {
    name: 'certs',
    field: (row) =>
      row.certifications.items.length > 0
        ? row.certifications.items.length
        : '-',
    label: 'Certs',
    required: false,
    align: 'center',
    sortable: false,
  },
  {
    name: 'skills',
    field: (row) =>
      row.skills.items.length > 0 ? row.skills.items.length : '-',
    label: 'Skills',
    required: false,
    align: 'center',
    sortable: false,
  },
  {
    name: 'score',
    field: (row) => {
      let certScore = 0;
      let skillScore = 0;

      if (row.certifications.items.length > 0) {
        certScore = row.certifications.items.reduce(
          (acc, cert) => acc + cert.certification.certificationLevel.score,
          0
        );
      }

      if (row.skills.items.length > 0) {
        skillScore = row.skills.items.reduce(
          (acc, skill) => acc + skillStore.skillsScores[skill.level],
          0
        );
      }

      const totalScore = certScore + skillScore;

      if (totalScore > 0) {
        return totalScore;
      } else {
        return '-';
      }
    },
    label: 'Score',
    required: true,
    align: 'center',
    sortable: false,
  },
];

export const usersPageColumns = [
  {
    name: 'name',
    field: (row) => `${row.firstName} ${row.lastName}`,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'certs',
    field: (row) =>
      row.certifications.items.length > 0
        ? row.certifications.items.length
        : '-',
    label: 'Certs',
    required: true,
    align: 'center',
    sortable: true,
  },
  {
    name: 'skills',
    field: (row) =>
      row.skills.items.length > 0 ? row.skills.items.length : '-',
    label: 'Skills',
    required: true,
    align: 'center',
    sortable: true,
  },
  {
    name: 'score',
    field: (row) => calculateUserScore(row) > 0 ? calculateUserScore(row) : '-',
    label: 'Score',
    required: true,
    align: 'center',
    sortable: true,
  },
];

export const teamPageColumns = [
  {
    name: 'name',
    field: (row) => `${row.user.firstName} ${row.user.lastName}`,
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'certs',
    field: (row) =>
      row.user.certifications.items.length > 0
        ? row.user.certifications.items.length
        : '-',
    label: 'Certs',
    required: false,
    align: 'center',
    sortable: true,
  },
  {
    name: 'skills',
    field: (row) =>
      row.user.skills.items.length > 0
        ? row.user.skills.items.length
        : '-',
    label: 'Skills',
    required: false,
    align: 'center',
    sortable: true,
  },
  {
    name: 'score',
    field: (row) => calculateUserScore(row.user) > 0 ? calculateUserScore(row.user) : '-',
    label: 'Score',
    required: true,
    align: 'center',
    sortable: true,
  },
];

export const teamsPageColumns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'users',
    field: (row) => (row.users.items.length > 0 ? row.users.items.length : '-'),
    label: 'Users',
    required: true,
    align: 'center',
    sortable: true,
  },
  {
    name: 'certs',
    field: (row) => (calculateTeamsCerts(row) ? calculateTeamsCerts(row) : '-'),
    label: 'Certs',
    required: true,
    align: 'center',
    sortable: true,
  },
  {
    name: 'skills',
    field: (row) => (calculateTeamsSkills(row) ? calculateTeamsSkills(row) : '-'),
    label: 'Skills',
    required: false,
    align: 'center',
    sortable: true,
  },
  {
    name: 'score',
    field: (row) => (calculateTeamsScore(row) ? calculateTeamsScore(row) : '-'),
    label: 'Score',
    required: true,
    align: 'center',
    sortable: true,
  },
  {
    name: 'average',
    field: (row) => (calculateTeamsAverage(row) ? calculateTeamsAverage(row) : '-'),
    label: 'Average',
    required: true,
    align: 'center',
    sortable: true,
  },
];
