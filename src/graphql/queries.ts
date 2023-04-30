/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCertification = /* GraphQL */ `
  query GetCertification($id: ID!) {
    getCertification(id: $id) {
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
export const listCertifications = /* GraphQL */ `
  query ListCertifications(
    $filter: ModelCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const certificationsByProviderID = /* GraphQL */ `
  query CertificationsByProviderID(
    $providerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificationsByProviderID(
      providerID: $providerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const certificationsByCertificationlevelID = /* GraphQL */ `
  query CertificationsByCertificationlevelID(
    $certificationlevelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificationsByCertificationlevelID(
      certificationlevelID: $certificationlevelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getCertificationLevel = /* GraphQL */ `
  query GetCertificationLevel($id: ID!) {
    getCertificationLevel(id: $id) {
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
export const listCertificationLevels = /* GraphQL */ `
  query ListCertificationLevels(
    $filter: ModelCertificationLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificationLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
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
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const skillsByProviderId = /* GraphQL */ `
  query SkillsByProviderId(
    $providerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    skillsByProviderId(
      providerId: $providerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkillLevel = /* GraphQL */ `
  query GetSkillLevel($id: ID!) {
    getSkillLevel(id: $id) {
      id
      name
      description
      score
      createdAt
      updatedAt
    }
  }
`;
export const listSkillLevels = /* GraphQL */ `
  query ListSkillLevels(
    $filter: ModelSkillLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserCertification = /* GraphQL */ `
  query GetUserCertification($id: ID!) {
    getUserCertification(id: $id) {
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
export const listUserCertifications = /* GraphQL */ `
  query ListUserCertifications(
    $filter: ModelUserCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCertifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          teams {
            items {
              id
              userId
              teamId
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
        createdAt
        updatedAt
        earnedAt
        expiredAt
        owner
      }
      nextToken
    }
  }
`;
export const userCertificationsByUserId = /* GraphQL */ `
  query UserCertificationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCertificationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          teams {
            items {
              id
              userId
              teamId
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
        createdAt
        updatedAt
        earnedAt
        expiredAt
        owner
      }
      nextToken
    }
  }
`;
export const userCertificationsByCertificationId = /* GraphQL */ `
  query UserCertificationsByCertificationId(
    $certificationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCertificationsByCertificationId(
      certificationId: $certificationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          teams {
            items {
              id
              userId
              teamId
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
        createdAt
        updatedAt
        earnedAt
        expiredAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserTeam = /* GraphQL */ `
  query GetUserTeam($id: ID!) {
    getUserTeam(id: $id) {
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
export const listUserTeams = /* GraphQL */ `
  query ListUserTeams(
    $filter: ModelUserTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          teams {
            items {
              id
              userId
              teamId
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
      nextToken
    }
  }
`;
export const userTeamsByUserId = /* GraphQL */ `
  query UserTeamsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userTeamsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          teams {
            items {
              id
              userId
              teamId
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
      nextToken
    }
  }
`;
export const userTeamsByTeamId = /* GraphQL */ `
  query UserTeamsByTeamId(
    $teamId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userTeamsByTeamId(
      teamId: $teamId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          teams {
            items {
              id
              userId
              teamId
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
      nextToken
    }
  }
`;
