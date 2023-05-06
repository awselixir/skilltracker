import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'certs/:id',
        name: 'cert',
        component: () => import('src/pages/certs/CertPage.vue'),
        children: [
          {
            path: 'edit',
            name: 'editCert',
            component: () => import('src/pages/certs/CertPageEdit.vue'),
            props: true,
          },
          {
            path: 'add',
            name: 'addUserCert',
            component: () => import('src/pages/certs/CertPageAddUsers.vue'),
            props: true,
          },
        ],
      },
      {
        path: 'certs',
        name: 'certs',
        component: () => import('src/pages/certs/CertsPage.vue'),
        children: [
          {
            path: 'new',
            name: 'newCertification',
            component: () => import('src/pages/certs/CertsPageNew.vue'),
            props: true,
          },
        ],
      },
      {
        path: 'levels',
        name: 'levels',
        component: () => import('pages/LevelsPage.vue'),
        children: [
          {
            path: 'new-cert-level',
            name: 'newCertLevel',
            component: () => import('components/modals/ModalCertLevelNew.vue'),
            props: true,
          },
          {
            path: 'update-cert-level/:id',
            name: 'updateCertLevel',
            component: () =>
              import('components/modals/ModalCertLevelUpdate.vue'),
            props: true,
          },
        ],
      },
      {
        path: 'providers',
        name: 'providers',
        component: () => import('src/pages/providers/ProvidersPage.vue'),
        children: [
          {
            path: 'new',
            name: 'newProvider',
            component: () => import('components/modals/ModalProviderNew.vue'),
            props: true,
          },
          {
            path: 'update/:id',
            name: 'updateProvider',
            component: () =>
              import('components/modals/ModalProviderUpdate.vue'),
            props: true,
          },
        ],
      },
      {
        path: 'skills',
        name: 'skills',
        component: () => import('src/pages/skills/SkillsPage.vue'),
        children: [
          {
            path: 'new',
            name: 'newSkill',
            component: () => import('pages/skills/SkillsPageNew.vue'),
            props: true,
          },
        ]
      },
      {
        path: 'skills/:id',
        name: 'skill',
        component: () => import('src/pages/skills/SkillPage.vue'),
        children: [
          {
            path: 'edit',
            name: 'editSkill',
            component: () => import('src/pages/skills/SkillPageEdit.vue'),
            props: true,
          },
        ]
      },
      {
        path: 'teams',
        name: 'teams',
        component: () => import('src/pages/teams/TeamsPage.vue'),
        children: [
          {
            path: 'new',
            name: 'newTeam',
            component: () => import('src/pages/teams/TeamsPageNew.vue'),
            props: true,
          },
          {
            path: 'update/:id',
            name: 'updateTeam',
            component: () => import('src/pages/teams/TeamPageEdit.vue'),
            props: true,
          },
        ],
      },
      {
        path: 'teams/:id',
        name: 'team',
        component: () => import('src/pages/teams/TeamPage.vue'),
        props: true,
        children: [
          {
            path: 'edit',
            name: 'editTeam',
            component: () => import('src/pages/teams/TeamPageEdit.vue'),
            props: true,
          },
        ],
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('pages/users/UsersPage.vue'),
      },
      {
        path: 'users/:id',
        name: 'user',
        component: () => import('src/pages/users/UserPage.vue'),
        children: [
          {
            path: 'edit',
            name: 'editUser',
            component: () => import('src/pages/users/UserPageEdit.vue'),
            props: true,
          },
          {
            path: 'certs',
            name: 'addUserCerts',
            component: () => import('src/pages/users/UserPageAddCerts.vue'),
            props: true,
          },
          {
            path: 'skills',
            name: 'addUserSkills',
            component: () => import('src/pages/users/UserPageAddSkills.vue'),
            props: true,
          },
        ],
      },
      {
        path: '',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
