// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Group, CertificationLevel, User, Certification, Provider, GroupUser, UserCertification } = initSchema(schema);

export {
  Group,
  CertificationLevel,
  User,
  Certification,
  Provider,
  GroupUser,
  UserCertification
};