import { calculateTeamsCerts } from './functions';

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
    name: 'score',
    field: (row) => {
      if (row.certifications.items.length > 0) {
        return row.certifications.items.reduce(
          (acc, cert) => acc + cert.certification.certificationLevel.score,
          0
        );
      } else {
        return '-';
      }
    },
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
];
