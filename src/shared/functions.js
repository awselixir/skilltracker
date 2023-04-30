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
