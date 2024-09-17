import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/servicos',
      name: 'Servicos',
      component: () => import('../pages/ServicosPage.vue'),
      // Descomente se deseja que essa rota exija autenticação
      //meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../pages/CadastroPage.vue'),
    },
    {
      path: '/recuperar',
      name: 'Recuperar',
      component: () => import('../pages/LoginRecuperar.vue'),
    },
    {
      path: '/perfil/:user_id',
      name: 'Perfil',
      component: () => import('../pages/PerfilPage.vue'),
    },
    {
      path: '/mural',
      name: 'Mural',
      component: () => import('../pages/MuralCriativoPage.vue'),
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: () => import('../pages/Produtos.vue'),
      //meta: { requiresAuth: true }
    },

    {
      path: '/avaliacao',
      name: 'Avaliacao',
      component: () => import('../pages/Ava.vue'),
      //meta: { requiresAuth: true }
    },





    {
      path: '/produto/:produtoId',
      name: 'DetalhesProduto',
      component: () => import('../pages/ProdutosDetalhes.vue'),
      props: true
    },

    {
      path: '/carrinho',
      name: 'Carrinho',
      component: () => import('../pages/Carrinho.vue'),
      props: true
    },

    {
      path: '/compra',
      name: 'Compra',
      component: () => import('../pages/Compra.vue'),
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;