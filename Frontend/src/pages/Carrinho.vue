<template>
  <section class="main-container">
    <HeaderComponent />
    <div>
      <div class="produtos-container">
        <div class="titulo-container">
          <h1 class="titulo">Seu Carrinho de Compras</h1>
        </div>
        <h3>Itens Selecionados</h3>

        <div v-if="cart.length > 0">
          <!-- Cabeçalho da Tabela -->
          <div class="header-row">
            <span class="header-item">Imagem</span>
            <span class="header-item">Nome</span>
            <span class="header-item">Preço</span>
            <span class="header-item">Ações</span>
          </div>

          <ul>
            <li v-for="(produto, index) in cart" :key="index" class="produto-item">
              <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem" />
              <div class="produto-info">
                <h2 class="produto-nome">{{ produto.nome }}</h2>
                <p class="produto-preco">{{ produto.preco }}</p>
              </div>
              <button @click="removeFromCart(index)" class="remover">Remover</button>
            </li>
          </ul>

          <div class="resumo">
            <h3>RESUMO DO PEDIDO:</h3>
            <p class="preço"><strong>Total: {{ totalCartPrice }}</strong></p>
          </div>

          <div>
            <button class="finalizar" @click="goToCompra">Finalizar Compra</button>
          </div>
        </div>

        <div v-else>
          <p>Seu carrinho está vazio.</p>
        </div>
      </div>
    </div>
    <FooterComponent />
  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'Carrinho',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalCartPrice() {
      return this.cart.reduce((total, produto) => {
        const preco = parseFloat(produto.preco.replace('R$', '').replace(',', '.'));
        return total + preco;
      }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  },
  mounted() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      this.cart = storedCart;
    }
  },
  methods: {
    goToCompra() {
  this.$router.push({ name: 'Compra' });
},
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
/* Estilização do carrinho */
.produto-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.produto-imagem {
  width: 100px;
  height: 100px;
  margin-left: 50px;
}

.produto-info {
  display: flex;
  flex-direction: row; /* Mantém o título e o preço na mesma linha */
  align-items: center; /* Alinha verticalmente no centro */
  margin-left: 20px; /* Espaço entre a imagem e as informações */
}

.produto-nome {
  margin-right: 20px; /* Espaçamento entre o nome e o preço */
}

.titulo-container {
  text-align: center; /* Centraliza o título */
  margin-bottom: 20px;
}

.titulo {
  border-radius: 8px;
  padding: 10px;
  width: 300px; /* Largura da caixa de título */
  height: 60px; /* Altura da caixa de título */
  margin: 0 auto; /* Centraliza horizontalmente */
}

.produtos-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px auto;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
}

/* Estilização da linha de cabeçalho */
.header-row {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.header-item {
  flex: 1; /* Ajusta a largura de cada item da linha */
  text-align: center; /* Centraliza o texto */
}

.remover {
  background-color: rgba(255, 0, 0, 0.63);
  color: #fff;
  width: 100px;
  height: 50px;
  font-size: 1.0em;
  border-radius: 10px;
  margin-left: 185px;
}

.resumo {
  margin-top: 50px;
}

.preço {
margin-left: 20px;
}

.finalizar {
 margin-left: 800px;
 color: white;
 background-color:  #4B0082;
 width: 300px;
 height: 60px;
 border-radius: 10px;
 font-weight: bold;
 font-size: 1.4em;
}
</style>
