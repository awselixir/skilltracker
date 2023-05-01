const colorNames = [
  'blue',
  'grey',
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'amber',
  'orange',
  'deep-orange',
];
const colorNumbers = ['6', '7', '8', '9', '10'];

export const createColor = () => {
  const name = colorNames[Math.floor(Math.random() * colorNames.length)];
  const number = colorNumbers[Math.floor(Math.random() * colorNumbers.length)];

  return `${name}-${number}`;
};

export const calculateTeamsCerts = (row) => {
  return row.users.items.reduce((acc, userTeam) => {
    return acc + userTeam.user.certifications.items.length;
  }, 0);
};
