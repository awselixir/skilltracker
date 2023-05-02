/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCertification = /* GraphQL */ `
  subscription OnCreateCertification(
    $filter: ModelSubscriptionCertificationFilterInput
  ) {
    onCreateCertification(filter: $filter) {
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
            shortName
            description
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
            skills {
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
export const onUpdateCertification = /* GraphQL */ `
  subscription OnUpdateCertification(
    $filter: ModelSubscriptionCertificationFilterInput
  ) {
    onUpdateCertification(filter: $filter) {
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
            shortName
            description
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
            skills {
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
export const onDeleteCertification = /* GraphQL */ `
  subscription OnDeleteCertification(
    $filter: ModelSubscriptionCertificationFilterInput
  ) {
    onDeleteCertification(filter: $filter) {
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
            shortName
            description
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
            skills {
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
export const onCreateCertificationLevel = /* GraphQL */ `
  subscription OnCreateCertificationLevel(
    $filter: ModelSubscriptionCertificationLevelFilterInput
  ) {
    onCreateCertificationLevel(filter: $filter) {
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
export const onUpdateCertificationLevel = /* GraphQL */ `
  subscription OnUpdateCertificationLevel(
    $filter: ModelSubscriptionCertificationLevelFilterInput
  ) {
    onUpdateCertificationLevel(filter: $filter) {
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
export const onDeleteCertificationLevel = /* GraphQL */ `
  subscription OnDeleteCertificationLevel(
    $filter: ModelSubscriptionCertificationLevelFilterInput
  ) {
    onDeleteCertificationLevel(filter: $filter) {
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
export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onCreateProvider(filter: $filter) {
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
          shortName
          description
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
          users {
            items {
              id
              userId
              skillId
              createdAt
              updatedAt
              owner
              level
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
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onUpdateProvider(filter: $filter) {
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
          shortName
          description
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
          users {
            items {
              id
              userId
              skillId
              createdAt
              updatedAt
              owner
              level
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
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
    onDeleteProvider(filter: $filter) {
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
          shortName
          description
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
          users {
            items {
              id
              userId
              skillId
              createdAt
              updatedAt
              owner
              level
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
      id
      name
      shortName
      description
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
            shortName
            description
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
          skillId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            skills {
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
          skill {
            id
            name
            shortName
            description
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
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
          level
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
      id
      name
      shortName
      description
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
            shortName
            description
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
          skillId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            skills {
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
          skill {
            id
            name
            shortName
            description
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
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
          level
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
      id
      name
      shortName
      description
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
            shortName
            description
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
          skillId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            skills {
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
          skill {
            id
            name
            shortName
            description
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
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
          level
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
            skills {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
            skills {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
            skills {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
            skills {
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
      skills {
        items {
          id
          userId
          skillId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            skills {
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
          skill {
            id
            name
            shortName
            description
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
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
          level
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
            skills {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
            skills {
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
      skills {
        items {
          id
          userId
          skillId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            skills {
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
          skill {
            id
            name
            shortName
            description
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
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
          level
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
            skills {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
            skills {
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
      skills {
        items {
          id
          userId
          skillId
          user {
            id
            firstName
            lastName
            email
            image
            certifications {
              nextToken
            }
            skills {
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
          skill {
            id
            name
            shortName
            description
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
            users {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
          level
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
            skills {
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
export const onCreateUserCertification = /* GraphQL */ `
  subscription OnCreateUserCertification(
    $filter: ModelSubscriptionUserCertificationFilterInput
    $owner: String
  ) {
    onCreateUserCertification(filter: $filter, owner: $owner) {
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
              shortName
              description
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
export const onUpdateUserCertification = /* GraphQL */ `
  subscription OnUpdateUserCertification(
    $filter: ModelSubscriptionUserCertificationFilterInput
    $owner: String
  ) {
    onUpdateUserCertification(filter: $filter, owner: $owner) {
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
              shortName
              description
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
export const onDeleteUserCertification = /* GraphQL */ `
  subscription OnDeleteUserCertification(
    $filter: ModelSubscriptionUserCertificationFilterInput
    $owner: String
  ) {
    onDeleteUserCertification(filter: $filter, owner: $owner) {
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
              shortName
              description
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
export const onCreateUserSkill = /* GraphQL */ `
  subscription OnCreateUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
    $owner: String
  ) {
    onCreateUserSkill(filter: $filter, owner: $owner) {
      id
      userId
      skillId
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
      skill {
        id
        name
        shortName
        description
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
              shortName
              description
              providerId
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
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
      level
    }
  }
`;
export const onUpdateUserSkill = /* GraphQL */ `
  subscription OnUpdateUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
    $owner: String
  ) {
    onUpdateUserSkill(filter: $filter, owner: $owner) {
      id
      userId
      skillId
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
      skill {
        id
        name
        shortName
        description
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
              shortName
              description
              providerId
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
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
      level
    }
  }
`;
export const onDeleteUserSkill = /* GraphQL */ `
  subscription OnDeleteUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
    $owner: String
  ) {
    onDeleteUserSkill(filter: $filter, owner: $owner) {
      id
      userId
      skillId
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
      skill {
        id
        name
        shortName
        description
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
              shortName
              description
              providerId
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
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
      level
    }
  }
`;
export const onCreateUserTeam = /* GraphQL */ `
  subscription OnCreateUserTeam(
    $filter: ModelSubscriptionUserTeamFilterInput
    $owner: String
  ) {
    onCreateUserTeam(filter: $filter, owner: $owner) {
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
export const onUpdateUserTeam = /* GraphQL */ `
  subscription OnUpdateUserTeam(
    $filter: ModelSubscriptionUserTeamFilterInput
    $owner: String
  ) {
    onUpdateUserTeam(filter: $filter, owner: $owner) {
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
export const onDeleteUserTeam = /* GraphQL */ `
  subscription OnDeleteUserTeam(
    $filter: ModelSubscriptionUserTeamFilterInput
    $owner: String
  ) {
    onDeleteUserTeam(filter: $filter, owner: $owner) {
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
        skills {
          items {
            id
            userId
            skillId
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
            skill {
              id
              name
              shortName
              description
              providerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
            level
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
