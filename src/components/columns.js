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
    field: row => row.provider.shortName,
    label: 'Provider',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'level',
    field: row => row.certificationLevel.name,
    label: 'Level',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'earned',
    field: row => row.users.items.length > 0 ? row.users.items.length : '-',
    label: 'Earned',
    required: true,
    align: 'center',
    sortable: true,
  },
];
