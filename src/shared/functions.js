import { useSkillStore } from 'src/stores/skill-store';
const skillStore = useSkillStore();

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

export const calculateTeamsSkills = (row) => {
  return row.users.items.reduce((acc, userTeam) => {
    return acc + userTeam.user.skills.items.length;
  }, 0);
};

export const calculateTeamsScore = (row) => {
  const usersCerts = [];
  const usersSkills = [];

  for (const item of row.users.items) {
    for (const userCert of item.user.certifications.items) {
      usersCerts.push(userCert);
    }

    for (const userSkill of item.user.skills.items) {
      usersSkills.push(userSkill);
    }
  }
  const usersCertsScore = usersCerts.reduce((acc, userCert) => {
    return acc + userCert.certification.certificationLevel.score;
  }, 0);

  const usersSkillsScore = usersSkills.reduce((acc, userSkill) => {
    return acc + skillStore.skillsScores[userSkill.level];
  }, 0);

  return usersCertsScore + usersSkillsScore;
};

export const calculateUserScore = (row) => {
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

  return certScore + skillScore;
};
