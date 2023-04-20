/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  description?: string | null,
  users?: ModelUserTeamConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserTeamConnection = {
  __typename: "ModelUserTeamConnection",
  items:  Array<UserTeam | null >,
  nextToken?: string | null,
};

export type UserTeam = {
  __typename: "UserTeam",
  id: string,
  teamId: string,
  userId: string,
  team: Team,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  image?: string | null,
  certifications?: ModelUserCertificationConnection | null,
  teams?: ModelUserTeamConnection | null,
  color?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserCertificationConnection = {
  __typename: "ModelUserCertificationConnection",
  items:  Array<UserCertification | null >,
  nextToken?: string | null,
};

export type UserCertification = {
  __typename: "UserCertification",
  id: string,
  userId: string,
  certificationId: string,
  user: User,
  certification: Certification,
  createdAt: string,
  updatedAt: string,
  earnedAt?: string | null,
  expiredAt?: string | null,
};

export type Certification = {
  __typename: "Certification",
  id: string,
  name: string,
  shortName: string,
  description?: string | null,
  image?: string | null,
  providerID: string,
  provider?: Provider | null,
  certificationlevelID: string,
  certificationLevel?: CertificationLevel | null,
  users?: ModelUserCertificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Provider = {
  __typename: "Provider",
  id: string,
  name: string,
  shortName: string,
  description?: string | null,
  image?: string | null,
  certifications?: ModelCertificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCertificationConnection = {
  __typename: "ModelCertificationConnection",
  items:  Array<Certification | null >,
  nextToken?: string | null,
};

export type CertificationLevel = {
  __typename: "CertificationLevel",
  id: string,
  name: string,
  description?: string | null,
  score?: number | null,
  certifications?: ModelCertificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateCertificationLevelInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  score?: number | null,
};

export type ModelCertificationLevelConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelCertificationLevelConditionInput | null > | null,
  or?: Array< ModelCertificationLevelConditionInput | null > | null,
  not?: ModelCertificationLevelConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCertificationLevelInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  score?: number | null,
};

export type DeleteCertificationLevelInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  image?: string | null,
  color?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  image?: string | null,
  color?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCertificationInput = {
  id?: string | null,
  name: string,
  shortName: string,
  description?: string | null,
  image?: string | null,
  providerID: string,
  certificationlevelID: string,
};

export type ModelCertificationConditionInput = {
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  providerID?: ModelIDInput | null,
  certificationlevelID?: ModelIDInput | null,
  and?: Array< ModelCertificationConditionInput | null > | null,
  or?: Array< ModelCertificationConditionInput | null > | null,
  not?: ModelCertificationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCertificationInput = {
  id: string,
  name?: string | null,
  shortName?: string | null,
  description?: string | null,
  image?: string | null,
  providerID?: string | null,
  certificationlevelID?: string | null,
};

export type DeleteCertificationInput = {
  id: string,
};

export type CreateUserCertificationInput = {
  id?: string | null,
  userId: string,
  certificationId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  earnedAt?: string | null,
  expiredAt?: string | null,
};

export type ModelUserCertificationConditionInput = {
  userId?: ModelIDInput | null,
  certificationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  earnedAt?: ModelStringInput | null,
  expiredAt?: ModelStringInput | null,
  and?: Array< ModelUserCertificationConditionInput | null > | null,
  or?: Array< ModelUserCertificationConditionInput | null > | null,
  not?: ModelUserCertificationConditionInput | null,
};

export type UpdateUserCertificationInput = {
  id: string,
  userId?: string | null,
  certificationId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  earnedAt?: string | null,
  expiredAt?: string | null,
};

export type DeleteUserCertificationInput = {
  id: string,
};

export type CreateProviderInput = {
  id?: string | null,
  name: string,
  shortName: string,
  description?: string | null,
  image?: string | null,
};

export type ModelProviderConditionInput = {
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProviderConditionInput | null > | null,
  or?: Array< ModelProviderConditionInput | null > | null,
  not?: ModelProviderConditionInput | null,
};

export type UpdateProviderInput = {
  id: string,
  name?: string | null,
  shortName?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeleteProviderInput = {
  id: string,
};

export type CreateUserTeamInput = {
  id?: string | null,
  teamId: string,
  userId: string,
};

export type ModelUserTeamConditionInput = {
  teamId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserTeamConditionInput | null > | null,
  or?: Array< ModelUserTeamConditionInput | null > | null,
  not?: ModelUserTeamConditionInput | null,
};

export type UpdateUserTeamInput = {
  id: string,
  teamId?: string | null,
  userId?: string | null,
};

export type DeleteUserTeamInput = {
  id: string,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelCertificationLevelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelCertificationLevelFilterInput | null > | null,
  or?: Array< ModelCertificationLevelFilterInput | null > | null,
  not?: ModelCertificationLevelFilterInput | null,
};

export type ModelCertificationLevelConnection = {
  __typename: "ModelCertificationLevelConnection",
  items:  Array<CertificationLevel | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCertificationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  providerID?: ModelIDInput | null,
  certificationlevelID?: ModelIDInput | null,
  and?: Array< ModelCertificationFilterInput | null > | null,
  or?: Array< ModelCertificationFilterInput | null > | null,
  not?: ModelCertificationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserCertificationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  certificationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  earnedAt?: ModelStringInput | null,
  expiredAt?: ModelStringInput | null,
  and?: Array< ModelUserCertificationFilterInput | null > | null,
  or?: Array< ModelUserCertificationFilterInput | null > | null,
  not?: ModelUserCertificationFilterInput | null,
};

export type ModelProviderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProviderFilterInput | null > | null,
  or?: Array< ModelProviderFilterInput | null > | null,
  not?: ModelProviderFilterInput | null,
};

export type ModelProviderConnection = {
  __typename: "ModelProviderConnection",
  items:  Array<Provider | null >,
  nextToken?: string | null,
};

export type ModelUserTeamFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserTeamFilterInput | null > | null,
  or?: Array< ModelUserTeamFilterInput | null > | null,
  not?: ModelUserTeamFilterInput | null,
};

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCertificationLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCertificationLevelFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificationLevelFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  providerID?: ModelSubscriptionIDInput | null,
  certificationlevelID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificationFilterInput | null > | null,
};

export type ModelSubscriptionUserCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  certificationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  earnedAt?: ModelSubscriptionStringInput | null,
  expiredAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserCertificationFilterInput | null > | null,
};

export type ModelSubscriptionProviderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProviderFilterInput | null > | null,
  or?: Array< ModelSubscriptionProviderFilterInput | null > | null,
};

export type ModelSubscriptionUserTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserTeamFilterInput | null > | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCertificationLevelMutationVariables = {
  input: CreateCertificationLevelInput,
  condition?: ModelCertificationLevelConditionInput | null,
};

export type CreateCertificationLevelMutation = {
  createCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCertificationLevelMutationVariables = {
  input: UpdateCertificationLevelInput,
  condition?: ModelCertificationLevelConditionInput | null,
};

export type UpdateCertificationLevelMutation = {
  updateCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCertificationLevelMutationVariables = {
  input: DeleteCertificationLevelInput,
  condition?: ModelCertificationLevelConditionInput | null,
};

export type DeleteCertificationLevelMutation = {
  deleteCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCertificationMutationVariables = {
  input: CreateCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type CreateCertificationMutation = {
  createCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCertificationMutationVariables = {
  input: UpdateCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type UpdateCertificationMutation = {
  updateCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCertificationMutationVariables = {
  input: DeleteCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type DeleteCertificationMutation = {
  deleteCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCertificationMutationVariables = {
  input: CreateUserCertificationInput,
  condition?: ModelUserCertificationConditionInput | null,
};

export type CreateUserCertificationMutation = {
  createUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type UpdateUserCertificationMutationVariables = {
  input: UpdateUserCertificationInput,
  condition?: ModelUserCertificationConditionInput | null,
};

export type UpdateUserCertificationMutation = {
  updateUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type DeleteUserCertificationMutationVariables = {
  input: DeleteUserCertificationInput,
  condition?: ModelUserCertificationConditionInput | null,
};

export type DeleteUserCertificationMutation = {
  deleteUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type CreateProviderMutationVariables = {
  input: CreateProviderInput,
  condition?: ModelProviderConditionInput | null,
};

export type CreateProviderMutation = {
  createProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProviderMutationVariables = {
  input: UpdateProviderInput,
  condition?: ModelProviderConditionInput | null,
};

export type UpdateProviderMutation = {
  updateProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProviderMutationVariables = {
  input: DeleteProviderInput,
  condition?: ModelProviderConditionInput | null,
};

export type DeleteProviderMutation = {
  deleteProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserTeamMutationVariables = {
  input: CreateUserTeamInput,
  condition?: ModelUserTeamConditionInput | null,
};

export type CreateUserTeamMutation = {
  createUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserTeamMutationVariables = {
  input: UpdateUserTeamInput,
  condition?: ModelUserTeamConditionInput | null,
};

export type UpdateUserTeamMutation = {
  updateUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserTeamMutationVariables = {
  input: DeleteUserTeamInput,
  condition?: ModelUserTeamConditionInput | null,
};

export type DeleteUserTeamMutation = {
  deleteUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCertificationLevelQueryVariables = {
  id: string,
};

export type GetCertificationLevelQuery = {
  getCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCertificationLevelsQueryVariables = {
  filter?: ModelCertificationLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificationLevelsQuery = {
  listCertificationLevels?:  {
    __typename: "ModelCertificationLevelConnection",
    items:  Array< {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCertificationQueryVariables = {
  id: string,
};

export type GetCertificationQuery = {
  getCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCertificationsQueryVariables = {
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificationsQuery = {
  listCertifications?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CertificationsByProviderIDQueryVariables = {
  providerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CertificationsByProviderIDQuery = {
  certificationsByProviderID?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CertificationsByCertificationlevelIDQueryVariables = {
  certificationlevelID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CertificationsByCertificationlevelIDQuery = {
  certificationsByCertificationlevelID?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserCertificationQueryVariables = {
  id: string,
};

export type GetUserCertificationQuery = {
  getUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type ListUserCertificationsQueryVariables = {
  filter?: ModelUserCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCertificationsQuery = {
  listUserCertifications?:  {
    __typename: "ModelUserCertificationConnection",
    items:  Array< {
      __typename: "UserCertification",
      id: string,
      userId: string,
      certificationId: string,
      user:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        image?: string | null,
        certifications?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        teams?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      certification:  {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      earnedAt?: string | null,
      expiredAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserCertificationsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCertificationsByUserIdQuery = {
  userCertificationsByUserId?:  {
    __typename: "ModelUserCertificationConnection",
    items:  Array< {
      __typename: "UserCertification",
      id: string,
      userId: string,
      certificationId: string,
      user:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        image?: string | null,
        certifications?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        teams?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      certification:  {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      earnedAt?: string | null,
      expiredAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserCertificationsByCertificationIdQueryVariables = {
  certificationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCertificationsByCertificationIdQuery = {
  userCertificationsByCertificationId?:  {
    __typename: "ModelUserCertificationConnection",
    items:  Array< {
      __typename: "UserCertification",
      id: string,
      userId: string,
      certificationId: string,
      user:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        image?: string | null,
        certifications?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        teams?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      certification:  {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      earnedAt?: string | null,
      expiredAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProviderQueryVariables = {
  id: string,
};

export type GetProviderQuery = {
  getProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProvidersQueryVariables = {
  filter?: ModelProviderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProvidersQuery = {
  listProviders?:  {
    __typename: "ModelProviderConnection",
    items:  Array< {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserTeamQueryVariables = {
  id: string,
};

export type GetUserTeamQuery = {
  getUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserTeamsQueryVariables = {
  filter?: ModelUserTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserTeamsQuery = {
  listUserTeams?:  {
    __typename: "ModelUserTeamConnection",
    items:  Array< {
      __typename: "UserTeam",
      id: string,
      teamId: string,
      userId: string,
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        description?: string | null,
        users?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        image?: string | null,
        certifications?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        teams?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserTeamsByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserTeamsByTeamIdQuery = {
  userTeamsByTeamId?:  {
    __typename: "ModelUserTeamConnection",
    items:  Array< {
      __typename: "UserTeam",
      id: string,
      teamId: string,
      userId: string,
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        description?: string | null,
        users?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        image?: string | null,
        certifications?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        teams?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserTeamsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserTeamsByUserIdQuery = {
  userTeamsByUserId?:  {
    __typename: "ModelUserTeamConnection",
    items:  Array< {
      __typename: "UserTeam",
      id: string,
      teamId: string,
      userId: string,
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        description?: string | null,
        users?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        image?: string | null,
        certifications?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        teams?:  {
          __typename: "ModelUserTeamConnection",
          nextToken?: string | null,
        } | null,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCertificationLevelSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationLevelFilterInput | null,
};

export type OnCreateCertificationLevelSubscription = {
  onCreateCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCertificationLevelSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationLevelFilterInput | null,
};

export type OnUpdateCertificationLevelSubscription = {
  onUpdateCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCertificationLevelSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationLevelFilterInput | null,
};

export type OnDeleteCertificationLevelSubscription = {
  onDeleteCertificationLevel?:  {
    __typename: "CertificationLevel",
    id: string,
    name: string,
    description?: string | null,
    score?: number | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image?: string | null,
    certifications?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        teamId: string,
        userId: string,
        team:  {
          __typename: "Team",
          id: string,
          name: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnCreateCertificationSubscription = {
  onCreateCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnUpdateCertificationSubscription = {
  onUpdateCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnDeleteCertificationSubscription = {
  onDeleteCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    providerID: string,
    provider?:  {
      __typename: "Provider",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    certificationlevelID: string,
    certificationLevel?:  {
      __typename: "CertificationLevel",
      id: string,
      name: string,
      description?: string | null,
      score?: number | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUserCertificationConnection",
      items:  Array< {
        __typename: "UserCertification",
        id: string,
        userId: string,
        certificationId: string,
        user:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          image?: string | null,
          color?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        certification:  {
          __typename: "Certification",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          providerID: string,
          certificationlevelID: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        earnedAt?: string | null,
        expiredAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserCertificationFilterInput | null,
};

export type OnCreateUserCertificationSubscription = {
  onCreateUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type OnUpdateUserCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserCertificationFilterInput | null,
};

export type OnUpdateUserCertificationSubscription = {
  onUpdateUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type OnDeleteUserCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserCertificationFilterInput | null,
};

export type OnDeleteUserCertificationSubscription = {
  onDeleteUserCertification?:  {
    __typename: "UserCertification",
    id: string,
    userId: string,
    certificationId: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    certification:  {
      __typename: "Certification",
      id: string,
      name: string,
      shortName: string,
      description?: string | null,
      image?: string | null,
      providerID: string,
      provider?:  {
        __typename: "Provider",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      certificationlevelID: string,
      certificationLevel?:  {
        __typename: "CertificationLevel",
        id: string,
        name: string,
        description?: string | null,
        score?: number | null,
        certifications?:  {
          __typename: "ModelCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      users?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    earnedAt?: string | null,
    expiredAt?: string | null,
  } | null,
};

export type OnCreateProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProviderFilterInput | null,
};

export type OnCreateProviderSubscription = {
  onCreateProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProviderFilterInput | null,
};

export type OnUpdateProviderSubscription = {
  onUpdateProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProviderSubscriptionVariables = {
  filter?: ModelSubscriptionProviderFilterInput | null,
};

export type OnDeleteProviderSubscription = {
  onDeleteProvider?:  {
    __typename: "Provider",
    id: string,
    name: string,
    shortName: string,
    description?: string | null,
    image?: string | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        name: string,
        shortName: string,
        description?: string | null,
        image?: string | null,
        providerID: string,
        provider?:  {
          __typename: "Provider",
          id: string,
          name: string,
          shortName: string,
          description?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        certificationlevelID: string,
        certificationLevel?:  {
          __typename: "CertificationLevel",
          id: string,
          name: string,
          description?: string | null,
          score?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        users?:  {
          __typename: "ModelUserCertificationConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserTeamSubscriptionVariables = {
  filter?: ModelSubscriptionUserTeamFilterInput | null,
};

export type OnCreateUserTeamSubscription = {
  onCreateUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserTeamSubscriptionVariables = {
  filter?: ModelSubscriptionUserTeamFilterInput | null,
};

export type OnUpdateUserTeamSubscription = {
  onUpdateUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserTeamSubscriptionVariables = {
  filter?: ModelSubscriptionUserTeamFilterInput | null,
};

export type OnDeleteUserTeamSubscription = {
  onDeleteUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    teamId: string,
    userId: string,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      users?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      image?: string | null,
      certifications?:  {
        __typename: "ModelUserCertificationConnection",
        items:  Array< {
          __typename: "UserCertification",
          id: string,
          userId: string,
          certificationId: string,
          createdAt: string,
          updatedAt: string,
          earnedAt?: string | null,
          expiredAt?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        items:  Array< {
          __typename: "UserTeam",
          id: string,
          teamId: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
