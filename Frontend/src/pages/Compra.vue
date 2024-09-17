<template>
  <div>
    <HeaderComponent />
    <section class="checkout-container">
      <div class="content-wrapper">
        <!-- Formulário de compra -->
        <div class="form-container">
          <h1 class="compra-titulo">Finalizar Compra</h1>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="nome">Nome Completo:</label>
              <input type="text" id="nome" v-model="formData.nome" required />
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="formData.email" required />
            </div>

            <div class="form-group">
              <label for="endereco">Endereço de Entrega:</label>
              <input type="text" id="endereco" v-model="formData.endereco" required />
            </div>

            <div class="form-group">
              <label for="cidade">Cidade:</label>
              <input type="text" id="cidade" v-model="formData.cidade" required />
            </div>

            <div class="form-group">
              <label for="estado">Estado:</label>
              <input type="text" id="estado" v-model="formData.estado" required />
            </div>

            <div class="form-group">
              <label for="cep">CEP:</label>
              <input type="text" id="cep" v-model="formData.cep" required />
            </div>

            <div class="form-group">
              <label>Método de Pagamento:</label>
              <select v-model="formData.metodoPagamento" required>
                <option value="" disabled selected>Selecione...</option>
                <option value="cartao">Cartão de Crédito</option>
                <option value="boleto">Boleto Bancário</option>
                <option value="pix">PIX</option>
              </select>
            </div>

            <button type="submit" class="submit-button">Confirmar Compra</button>
          </form>
        </div>

        <!-- Resumo do pedido -->
        <div class="resumo-container">
          <h2 class="resumo-titulo">Resumo do Pedido</h2>
          <div class="resumo-detalhes">
            <p class="resumo-texto">Quantidade de Itens: {{ quantidadeItens }}</p>
            <p class="resumo-texto">Valor Total: R$ {{ valorTotal.toFixed(2) }}</p>


          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'Compra',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      formData: {
        nome: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        metodoPagamento: '',
      },
      quantidadeItens: 0,
      valorTotal: 0.00,
    };
  },
  created() {
    // Ao carregar a página, recupera os dados do localStorage
    const dadosCarrinho = localStorage.getItem('dadosCarrinho');
    if (dadosCarrinho) {
      const { quantidadeItens, valorTotal } = JSON.parse(dadosCarrinho);
      this.quantidadeItens = quantidadeItens;
      this.valorTotal = valorTotal;
    }
  },
  methods: {
    handleSubmit() {
      console.log('Dados do formulário:', this.formData);
      alert('Compra confirmada!');
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        nome: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        metodoPagamento: '',
      };
    },
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

.form-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 600px;
  width: 100%;
  margin-right: 20px;
}

.resumo-container {
  background-color: #ee83f84f;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  height: 300px;
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #4B0082;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.submit-button:hover {
  background-color: #3c0071;
}

.resumo-detalhes {
  font-size: 16px;
  line-height: 1.6;
}

.resumo-titulo {
  color: #4B0082;
  font-size: 30px;
  line-height: 1.9;
  margin-bottom: 50px;
}

.resumo-detalhes {
  font-size: 18px;
  line-height: 2.0;
  color: #4B0082;
}

.compra-titulo {
  font-size: 18px;
  line-height: 1.6;
  color: #4B0082;
  font-size: 30px;
}
</style>
