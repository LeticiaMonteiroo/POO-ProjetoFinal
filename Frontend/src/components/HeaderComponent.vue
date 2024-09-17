
<template> 
  <header>
    <h1 class="tituloHeader" @click="goToHome">
      <span class="text-unb">Papelaria</span><span class= "text-Connect">Lale</span>
    </h1> 

    <nav class="header-nav">
      <ul>
        <li class="header-nav-li" @click="goToProdutos">Produtos</li>
        <li class="header-nav-li" @click="goToTutoriais">Tutoriais</li>
        <li class="header-nav-li" @click="goToServicos">Serviços</li>
      </ul>
    </nav>

    <div class="header-logout">
        <img class="header-logout-img" src="../assets/Carrinho.png" @click="gotoCarrinho">
      </div>

    <div class="header-account-actions">
      <div v-if="user_name != null" class="header-account-view">
        <span class="header-account-view-span">{{ user_name }}</span>
        <img class="header-account-view-img" src="../assets/account.png" @click="goToPerfil">
      </div>

      <div class="header-logout">
        <img class="header-logout-img" src="../assets/logout.png" @click="logoutAccount">
      </div>
    </div>

  
  </header>
</template>

<script>
export default {
data() {
  return {
    user_name: null
  };
},
mounted() {
  this.user_name = localStorage.getItem('user_name')
},
methods: {
  goToHome() {
    this.$router.push({ name: 'Home' });
  },
  goToProdutos() {
    this.$router.push({ name: 'Produtos' });
  },
  goToTutoriais() {
    this.$router.push({ name: 'Mural' });
  },
  goToServicos() {
    this.$router.push({ name: 'Servicos' });
  },
  goToPerfil() {
    this.$router.push({ name: 'Perfil', params: { user_id: localStorage.getItem('user_id') } });
  },
  gotoCarrinho() {
    this.$router.push({ name: 'Carrinho' });
  },
  
  async logoutAccount() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');

    this.$router.push({ name: 'Login' });
  }
},
}
</script>
<style scoped> 
header {
background-color: #4B0082;
padding: 2px 50px;
color: #cb6ce6;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
height: 120px;
}

.tituloHeader {
cursor: pointer;
}

.text-unb{
color: #cb6ce6;;
font-size: 36px;
}

.header-account-view-img:hover{
background-color: #cb6ce6;
}

.header-logout-img:hover{
background-color:#DDA0DD;

}
.text-Connect{
/* color:	#f17ea1; */
color:beige;
font-size: 36px;
}


/* .header-logo{
}
 */
.header-nav {
  display: flex;
  justify-content: end; /* Alinha os itens do nav para a direita */
  align-items: center; /* Centraliza verticalmente os itens */
}

ul {
  display: flex;
  flex-direction: row;
  gap: 50px; /* Ajusta a separação entre cada item da barra de navegação */
  list-style-type: none; /* Remove os marcadores de lista padrão */
  margin: 0;
  padding: 0;
}

.header-nav-li {
  padding: 15px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}

.header-nav-li:hover {
  background-color: #e0e0e0;
  border-radius: 10px;
}

.header-account-actions {
  display: flex;
  align-items: center;
}

.header-account-view {
  display: flex;
  margin-right: 30px;
}

.header-account-view-span {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
}

.header-account-view-img {
  height: 40px;
  padding: 10px;
  cursor: pointer;
  background-color: #cb6ce6; 
  border-radius: 10px; 
}

.header-logout {
  display: flex;
}

.header-logout-img {
  height: 40px;
  padding: 10px;
  cursor: pointer;
  background-color: #cb6ce6;
  border-radius: 10px; 
}

</style> 
