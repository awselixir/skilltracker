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
            props: true
          }
        ]
      },
      {
        path: 'certs',
        name: 'certs',
        component: () => import('src/pages/certs/CertsPage.vue'),
        children: [
          {
            path: 'new',
            name: 'newCertification',
            component: () =>
              import('src/pages/certs/CertsPageNew.vue'),
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
        component: () => import('pages/ProvidersPage.vue'),
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
        path: 'teams',
        name: 'teams',
        component: () => import('pages/TeamsPage.vue'),
        children: [
          {
            path: 'new',
            name: 'newTeam',
            component: () => import('components/modals/ModalTeamNew.vue'),
            props: true,
          },
          {
            path: 'update/:id',
            name: 'updateTeam',
            component: () => import('components/modals/ModalTeamUpdate.vue'),
            props: true,
          },
        ],
      },
      { path: '', component: () => import('pages/IndexPage.vue') },
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
