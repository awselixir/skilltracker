import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from '@aws-amplify/datastore';

import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
  AsyncItem,
} from '@aws-amplify/datastore';

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly users?: (GroupUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly users: AsyncCollection<GroupUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Group = LazyLoading extends LazyLoadingDisabled
  ? EagerGroup
  : LazyGroup;

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(
    source: Group,
    mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void
  ): Group;
};

type EagerCertificationLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CertificationLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly score?: number | null;
  readonly certifications?: (Certification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyCertificationLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CertificationLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly score?: number | null;
  readonly certifications: AsyncCollection<Certification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type CertificationLevel = LazyLoading extends LazyLoadingDisabled
  ? EagerCertificationLevel
  : LazyCertificationLevel;

export declare const CertificationLevel: (new (
  init: ModelInit<CertificationLevel>
) => CertificationLevel) & {
  copyOf(
    source: CertificationLevel,
    mutator: (
      draft: MutableModel<CertificationLevel>
    ) => MutableModel<CertificationLevel> | void
  ): CertificationLevel;
};

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly image?: string | null;
  readonly certifications?: (UserCertification | null)[] | null;
  readonly groups?: (GroupUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly image?: string | null;
  readonly certifications: AsyncCollection<UserCertification>;
  readonly groups: AsyncCollection<GroupUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type User = LazyLoading extends LazyLoadingDisabled
  ? EagerUser
  : LazyUser;

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(
    source: User,
    mutator: (draft: MutableModel<User>) => MutableModel<User> | void
  ): User;
};

type EagerCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly providerID: string;
  readonly provider?: Provider | null;
  readonly certificationlevelID: string;
  readonly certificationLevel?: CertificationLevel | null;
  readonly users?: (UserCertification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly providerID: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly certificationlevelID: string;
  readonly certificationLevel: AsyncItem<CertificationLevel | undefined>;
  readonly users: AsyncCollection<UserCertification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Certification = LazyLoading extends LazyLoadingDisabled
  ? EagerCertification
  : LazyCertification;

export declare const Certification: (new (
  init: ModelInit<Certification>
) => Certification) & {
  copyOf(
    source: Certification,
    mutator: (
      draft: MutableModel<Certification>
    ) => MutableModel<Certification> | void
  ): Certification;
};

type EagerProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly certifications?: (Certification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly certifications: AsyncCollection<Certification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Provider = LazyLoading extends LazyLoadingDisabled
  ? EagerProvider
  : LazyProvider;

export declare const Provider: (new (init: ModelInit<Provider>) => Provider) & {
  copyOf(
    source: Provider,
    mutator: (draft: MutableModel<Provider>) => MutableModel<Provider> | void
  ): Provider;
};

type EagerGroupUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupId?: string | null;
  readonly userId?: string | null;
  readonly group: Group;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyGroupUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupId?: string | null;
  readonly userId?: string | null;
  readonly group: AsyncItem<Group>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type GroupUser = LazyLoading extends LazyLoadingDisabled
  ? EagerGroupUser
  : LazyGroupUser;

export declare const GroupUser: (new (
  init: ModelInit<GroupUser>
) => GroupUser) & {
  copyOf(
    source: GroupUser,
    mutator: (draft: MutableModel<GroupUser>) => MutableModel<GroupUser> | void
  ): GroupUser;
};

type EagerUserCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly certificationId?: string | null;
  readonly user: User;
  readonly certification: Certification;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUserCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly certificationId?: string | null;
  readonly user: AsyncItem<User>;
  readonly certification: AsyncItem<Certification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type UserCertification = LazyLoading extends LazyLoadingDisabled
  ? EagerUserCertification
  : LazyUserCertification;

export declare const UserCertification: (new (
  init: ModelInit<UserCertification>
) => UserCertification) & {
  copyOf(
    source: UserCertification,
    mutator: (
      draft: MutableModel<UserCertification>
    ) => MutableModel<UserCertification> | void
  ): UserCertification;
};
