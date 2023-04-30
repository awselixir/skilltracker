export const getCertification = /* GraphQL */ `
  query GetCertificationCustom($id: ID!) {
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
      }
      certificationlevelID
      certificationLevel {
        id
        name
        description
        score
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
            title
            color
            state
          }
          earnedAt
          expiredAt
        }
        nextToken
      }
    }
  }
`;

export const listCertifications = /* GraphQL */ `
  query ListCertificationsCustom(
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
        providerID
        provider {
          id
          name
          shortName
          description
        }
        certificationlevelID
        certificationLevel {
          id
          name
          description
          score
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
              title
              color
              state
            }
            earnedAt
            expiredAt
          }
        }
      }
    }
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsersCustom(
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
        title
        certifications {
          items {
            id
            userId
            certificationId
            certification {
              id
              name
              shortName
              description
              image
              providerID
              certificationlevelID
              certificationLevel {
                id
                name
                score
              }
            }
            earnedAt
            expiredAt
          }
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
              state
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        color
        state
      }
    }
  }
`;

export const getUser = /* GraphQL */ `
  query GetUserCustom($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      title
      certifications {
        items {
          id
          userId
          certificationId
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
          }
          earnedAt
          expiredAt
        }
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
          }
        }
      }
      color
      state
    }
  }
`;

export const listProviders = /* GraphQL */ `
  query ListProvidersCustom(
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
        certifications {
          items {
            id
            name
            shortName
            description
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
              items {
                id
                userId
                certificationId
                user {
                  id
                  firstName
                  lastName
                  email
                  title
                  color
                  state
                }
                earnedAt
                expiredAt
              }
            }
          }
        }
      }
    }
  }
`;
