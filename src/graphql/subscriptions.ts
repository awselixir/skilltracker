/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
      id
      name
      description
      users {
        items {
          id
          teamId
          userId
          team {
            id
            name
            description
            createdAt
            updatedAt
          }
          user {
            id
            firstName
            lastName
            email
            image
            color
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
      id
      name
      description
      users {
        items {
          id
          teamId
          userId
          team {
            id
            name
            description
            createdAt
            updatedAt
          }
          user {
            id
            firstName
            lastName
            email
            image
            color
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
      id
      name
      description
      users {
        items {
          id
          teamId
          userId
          team {
            id
            name
            description
            createdAt
            updatedAt
          }
          user {
            id
            firstName
            lastName
            email
            image
            color
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
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
            createdAt
            updatedAt
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
        }
        nextToken
      }
      teams {
        items {
          id
          teamId
          userId
          team {
            id
            name
            description
            createdAt
            updatedAt
          }
          user {
            id
            firstName
            lastName
            email
            image
            color
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
            createdAt
            updatedAt
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
        }
        nextToken
      }
      teams {
        items {
          id
          teamId
          userId
          team {
            id
            name
            description
            createdAt
            updatedAt
          }
          user {
            id
            firstName
            lastName
            email
            image
            color
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
            createdAt
            updatedAt
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
        }
        nextToken
      }
      teams {
        items {
          id
          teamId
          userId
          team {
            id
            name
            description
            createdAt
            updatedAt
          }
          user {
            id
            firstName
            lastName
            email
            image
            color
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
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
            certificationlevelID
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
            createdAt
            updatedAt
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
            certificationlevelID
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
            createdAt
            updatedAt
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
            certificationlevelID
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
            createdAt
            updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCertification = /* GraphQL */ `
  subscription OnCreateUserCertification(
    $filter: ModelSubscriptionUserCertificationFilterInput
  ) {
    onCreateUserCertification(filter: $filter) {
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
          }
          nextToken
        }
        teams {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        createdAt
        updatedAt
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
    }
  }
`;
export const onUpdateUserCertification = /* GraphQL */ `
  subscription OnUpdateUserCertification(
    $filter: ModelSubscriptionUserCertificationFilterInput
  ) {
    onUpdateUserCertification(filter: $filter) {
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
          }
          nextToken
        }
        teams {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        createdAt
        updatedAt
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
    }
  }
`;
export const onDeleteUserCertification = /* GraphQL */ `
  subscription OnDeleteUserCertification(
    $filter: ModelSubscriptionUserCertificationFilterInput
  ) {
    onDeleteUserCertification(filter: $filter) {
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
          }
          nextToken
        }
        teams {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        createdAt
        updatedAt
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
  }
`;
export const onCreateUserTeam = /* GraphQL */ `
  subscription OnCreateUserTeam($filter: ModelSubscriptionUserTeamFilterInput) {
    onCreateUserTeam(filter: $filter) {
      id
      teamId
      userId
      team {
        id
        name
        description
        users {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
          }
          nextToken
        }
        teams {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserTeam = /* GraphQL */ `
  subscription OnUpdateUserTeam($filter: ModelSubscriptionUserTeamFilterInput) {
    onUpdateUserTeam(filter: $filter) {
      id
      teamId
      userId
      team {
        id
        name
        description
        users {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
          }
          nextToken
        }
        teams {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserTeam = /* GraphQL */ `
  subscription OnDeleteUserTeam($filter: ModelSubscriptionUserTeamFilterInput) {
    onDeleteUserTeam(filter: $filter) {
      id
      teamId
      userId
      team {
        id
        name
        description
        users {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
          }
          nextToken
        }
        teams {
          items {
            id
            teamId
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
