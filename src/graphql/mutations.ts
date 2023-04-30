/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCertification = /* GraphQL */ `
  mutation CreateCertification(
    $input: CreateCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    createCertification(input: $input, condition: $condition) {
      id
      name
      shortName
      description
      image
      providerID
      provider {
        id
        name
        shortName
        description
        image
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            name
            description
            image
            providerId
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      certificationlevelID
      certificationLevel {
        id
        name
        description
        score
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userId
          certificationId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          certification {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          earnedAt
          expiredAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCertification = /* GraphQL */ `
  mutation UpdateCertification(
    $input: UpdateCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    updateCertification(input: $input, condition: $condition) {
      id
      name
      shortName
      description
      image
      providerID
      provider {
        id
        name
        shortName
        description
        image
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            name
            description
            image
            providerId
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      certificationlevelID
      certificationLevel {
        id
        name
        description
        score
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userId
          certificationId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          certification {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          earnedAt
          expiredAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCertification = /* GraphQL */ `
  mutation DeleteCertification(
    $input: DeleteCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    deleteCertification(input: $input, condition: $condition) {
      id
      name
      shortName
      description
      image
      providerID
      provider {
        id
        name
        shortName
        description
        image
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            name
            description
            image
            providerId
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      certificationlevelID
      certificationLevel {
        id
        name
        description
        score
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          userId
          certificationId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          certification {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          earnedAt
          expiredAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCertificationLevel = /* GraphQL */ `
  mutation CreateCertificationLevel(
    $input: CreateCertificationLevelInput!
    $condition: ModelCertificationLevelConditionInput
  ) {
    createCertificationLevel(input: $input, condition: $condition) {
      id
      name
      description
      score
      certifications {
        items {
          id
          name
          shortName
          description
          image
          providerID
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          certificationlevelID
          certificationLevel {
            id
            name
            description
            score
            certifications {
              nextToken
            }
            createdAt
            updatedAt
          }
          users {
            items {
              id
              userId
              certificationId
              createdAt
              updatedAt
              earnedAt
              expiredAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCertificationLevel = /* GraphQL */ `
  mutation UpdateCertificationLevel(
    $input: UpdateCertificationLevelInput!
    $condition: ModelCertificationLevelConditionInput
  ) {
    updateCertificationLevel(input: $input, condition: $condition) {
      id
      name
      description
      score
      certifications {
        items {
          id
          name
          shortName
          description
          image
          providerID
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          certificationlevelID
          certificationLevel {
            id
            name
            description
            score
            certifications {
              nextToken
            }
            createdAt
            updatedAt
          }
          users {
            items {
              id
              userId
              certificationId
              createdAt
              updatedAt
              earnedAt
              expiredAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCertificationLevel = /* GraphQL */ `
  mutation DeleteCertificationLevel(
    $input: DeleteCertificationLevelInput!
    $condition: ModelCertificationLevelConditionInput
  ) {
    deleteCertificationLevel(input: $input, condition: $condition) {
      id
      name
      description
      score
      certifications {
        items {
          id
          name
          shortName
          description
          image
          providerID
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          certificationlevelID
          certificationLevel {
            id
            name
            description
            score
            certifications {
              nextToken
            }
            createdAt
            updatedAt
          }
          users {
            items {
              id
              userId
              certificationId
              createdAt
              updatedAt
              earnedAt
              expiredAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProvider = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
      id
      name
      shortName
      description
      image
      certifications {
        items {
          id
          name
          shortName
          description
          image
          providerID
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          certificationlevelID
          certificationLevel {
            id
            name
            description
            score
            certifications {
              nextToken
            }
            createdAt
            updatedAt
          }
          users {
            items {
              id
              userId
              certificationId
              createdAt
              updatedAt
              earnedAt
              expiredAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          name
          description
          image
          providerId
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
    $input: UpdateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    updateProvider(input: $input, condition: $condition) {
      id
      name
      shortName
      description
      image
      certifications {
        items {
          id
          name
          shortName
          description
          image
          providerID
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          certificationlevelID
          certificationLevel {
            id
            name
            description
            score
            certifications {
              nextToken
            }
            createdAt
            updatedAt
          }
          users {
            items {
              id
              userId
              certificationId
              createdAt
              updatedAt
              earnedAt
              expiredAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          name
          description
          image
          providerId
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProvider = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
      id
      name
      shortName
      description
      image
      certifications {
        items {
          id
          name
          shortName
          description
          image
          providerID
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          certificationlevelID
          certificationLevel {
            id
            name
            description
            score
            certifications {
              nextToken
            }
            createdAt
            updatedAt
          }
          users {
            items {
              id
              userId
              certificationId
              createdAt
              updatedAt
              earnedAt
              expiredAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          name
          description
          image
          providerId
          provider {
            id
            name
            shortName
            description
            image
            certifications {
              nextToken
            }
            skills {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      description
      image
      providerId
      provider {
        id
        name
        shortName
        description
        image
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            name
            description
            image
            providerId
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      description
      image
      providerId
      provider {
        id
        name
        shortName
        description
        image
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            name
            description
            image
            providerId
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      description
      image
      providerId
      provider {
        id
        name
        shortName
        description
        image
        certifications {
          items {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        skills {
          items {
            id
            name
            description
            image
            providerId
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSkillLevel = /* GraphQL */ `
  mutation CreateSkillLevel(
    $input: CreateSkillLevelInput!
    $condition: ModelSkillLevelConditionInput
  ) {
    createSkillLevel(input: $input, condition: $condition) {
      id
      name
      description
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateSkillLevel = /* GraphQL */ `
  mutation UpdateSkillLevel(
    $input: UpdateSkillLevelInput!
    $condition: ModelSkillLevelConditionInput
  ) {
    updateSkillLevel(input: $input, condition: $condition) {
      id
      name
      description
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkillLevel = /* GraphQL */ `
  mutation DeleteSkillLevel(
    $input: DeleteSkillLevelInput!
    $condition: ModelSkillLevelConditionInput
  ) {
    deleteSkillLevel(input: $input, condition: $condition) {
      id
      name
      description
      score
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      description
      color
      users {
        items {
          id
          userId
          teamId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          team {
            id
            name
            description
            color
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      description
      color
      users {
        items {
          id
          userId
          teamId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          team {
            id
            name
            description
            color
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      description
      color
      users {
        items {
          id
          userId
          teamId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          team {
            id
            name
            description
            color
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      image
      certifications {
        items {
          id
          userId
          certificationId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          certification {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          earnedAt
          expiredAt
          owner
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          team {
            id
            name
            description
            color
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      color
      state
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      image
      certifications {
        items {
          id
          userId
          certificationId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          certification {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          earnedAt
          expiredAt
          owner
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          team {
            id
            name
            description
            color
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      color
      state
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      image
      certifications {
        items {
          id
          userId
          certificationId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          certification {
            id
            name
            shortName
            description
            image
            providerID
            provider {
              id
              name
              shortName
              description
              image
              createdAt
              updatedAt
            }
            certificationlevelID
            certificationLevel {
              id
              name
              description
              score
              createdAt
              updatedAt
            }
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          earnedAt
          expiredAt
          owner
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            teams {
              nextToken
            }
            color
            state
            title
            createdAt
            updatedAt
            owner
          }
          team {
            id
            name
            description
            color
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      color
      state
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserCertification = /* GraphQL */ `
  mutation CreateUserCertification(
    $input: CreateUserCertificationInput!
    $condition: ModelUserCertificationConditionInput
  ) {
    createUserCertification(input: $input, condition: $condition) {
      id
      userId
      certificationId
      user {
        id
        firstName
        lastName
        email
        image
        certifications {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        color
        state
        title
        createdAt
        updatedAt
        owner
      }
      certification {
        id
        name
        shortName
        description
        image
        providerID
        provider {
          id
          name
          shortName
          description
          image
          certifications {
            items {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            nextToken
          }
          skills {
            items {
              id
              name
              description
              image
              providerId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        certificationlevelID
        certificationLevel {
          id
          name
          description
          score
          certifications {
            items {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        users {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      earnedAt
      expiredAt
      owner
    }
  }
`;
export const updateUserCertification = /* GraphQL */ `
  mutation UpdateUserCertification(
    $input: UpdateUserCertificationInput!
    $condition: ModelUserCertificationConditionInput
  ) {
    updateUserCertification(input: $input, condition: $condition) {
      id
      userId
      certificationId
      user {
        id
        firstName
        lastName
        email
        image
        certifications {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        color
        state
        title
        createdAt
        updatedAt
        owner
      }
      certification {
        id
        name
        shortName
        description
        image
        providerID
        provider {
          id
          name
          shortName
          description
          image
          certifications {
            items {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            nextToken
          }
          skills {
            items {
              id
              name
              description
              image
              providerId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        certificationlevelID
        certificationLevel {
          id
          name
          description
          score
          certifications {
            items {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        users {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      earnedAt
      expiredAt
      owner
    }
  }
`;
export const deleteUserCertification = /* GraphQL */ `
  mutation DeleteUserCertification(
    $input: DeleteUserCertificationInput!
    $condition: ModelUserCertificationConditionInput
  ) {
    deleteUserCertification(input: $input, condition: $condition) {
      id
      userId
      certificationId
      user {
        id
        firstName
        lastName
        email
        image
        certifications {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        color
        state
        title
        createdAt
        updatedAt
        owner
      }
      certification {
        id
        name
        shortName
        description
        image
        providerID
        provider {
          id
          name
          shortName
          description
          image
          certifications {
            items {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            nextToken
          }
          skills {
            items {
              id
              name
              description
              image
              providerId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        certificationlevelID
        certificationLevel {
          id
          name
          description
          score
          certifications {
            items {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        users {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      earnedAt
      expiredAt
      owner
    }
  }
`;
export const createUserTeam = /* GraphQL */ `
  mutation CreateUserTeam(
    $input: CreateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    createUserTeam(input: $input, condition: $condition) {
      id
      userId
      teamId
      user {
        id
        firstName
        lastName
        email
        image
        certifications {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        color
        state
        title
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        description
        color
        users {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserTeam = /* GraphQL */ `
  mutation UpdateUserTeam(
    $input: UpdateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    updateUserTeam(input: $input, condition: $condition) {
      id
      userId
      teamId
      user {
        id
        firstName
        lastName
        email
        image
        certifications {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        color
        state
        title
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        description
        color
        users {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserTeam = /* GraphQL */ `
  mutation DeleteUserTeam(
    $input: DeleteUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    deleteUserTeam(input: $input, condition: $condition) {
      id
      userId
      teamId
      user {
        id
        firstName
        lastName
        email
        image
        certifications {
          items {
            id
            userId
            certificationId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            earnedAt
            expiredAt
            owner
          }
          nextToken
        }
        teams {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        color
        state
        title
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        description
        color
        users {
          items {
            id
            userId
            teamId
            user {
              id
              firstName
              lastName
              email
              image
              color
              state
              title
              createdAt
              updatedAt
              owner
            }
            team {
              id
              name
              description
              color
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
