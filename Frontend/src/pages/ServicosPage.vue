<template>
  <section>
    <HeaderComponent/>

    <!-- Conteúdo principal -->
    <div class="containerDisciplina">
      <div class="container-selecao-title">Qualidade Garantida & Satisfação Completa!</div>
      
      <!-- Container de serviços -->
      <div class="services-container">
        <div 
          v-for="item in services" 
          :key="item.code" 
          class="service-container"
        >
          <div class="service-left">
            <div class="service-square">
              <!-- Adicionando a imagem do serviço -->
              <img :src="item.image" :alt="item.title" class="service-image" />
            </div>
          </div>
          <div class="service-right">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <p><strong>Materiais:</strong> {{ item.materials }}</p>
            <!-- Botão para abrir o formulário -->
            <button @click="openForm(item)">Solicitar Serviço</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal do formulário -->
    <div v-if="showForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Formulário de Solicitação - {{ selectedService.title }}</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="quantity">Quantidade:</label>
            <input 
              type="number" 
              v-model="formData.quantity" 
              @input="updatePrice" 
              min="1"
              required
            />
          </div>
          <div class="form-group">
            <label for="material">Materiais:</label>
            <div v-for="(material, index) in selectedService.materials.split(', ')" :key="index">
              <input 
                type="checkbox" 
                :value="material" 
                v-model="formData.materialsSelected" 
                @change="updatePrice"
              />
              {{ material }}
            </div>
          </div>
          <div class="form-group">
            <label for="serviceDescription">Descrição do Serviço:</label>
            <textarea v-model="formData.serviceDescription" required></textarea>
          </div>
          <div class="form-group">
            <label for="contact">Contato:</label>
            <input type="email" v-model="formData.contact" required>
          </div>
          <div class="form-group">
            
            <div class="form-buttons">
            <strong class="preço">Preço Total: R$ {{ totalPrice.toFixed(2) }}</strong>

            <button type="submit" class="enviar">Enviar Pedido</button>
            <button type="button" class="cancelar" @click="closeForm">Cancelar</button>
           </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Mensagem de agradecimento -->
    <div v-if="showMessage" class="thank-you-overlay">
      <div class="thank-you-message">
        <p>Muito obrigada pela confiança, entraremos em contato para confirmar sua compra!</p>
        <button @click="closeMessage">OK</button>
      </div>
    </div>

    <FooterComponent/>
  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },

  data() {
    return {
      services: [
        { 
          title: 'Convites Personalizados', 
          code: '001', 
          description: 'Personalizamos os convites para seu evento especial do jeito que quiser.',
          materials: 'Papéis personalizados, Envelopes decorados, Etiquetas adesivas, Fitas e Laços, Carimbos personalizados.',
          image: 'https://i.pinimg.com/736x/c8/20/5c/c8205c4b409ec64762a580d04d736697.jpg' // Link para a imagem do serviço
        },
        { 
          title: 'Planejadores e Agendas', 
          code: '002', 
          description: 'Crie planejadores e agendas personalizados para organizar seu ano com estilo.',
          materials: 'Cadernos com capa personalizada, Marcadores de página, Adesivos decorativos, Canetas coloridas, Régua.',
          image: 'https://i.pinimg.com/736x/e6/09/93/e60993ca0452846e8c7ef34ed19b7df0.jpg' // Link para a imagem do serviço
        },
        { 
          title: 'Rótulos e Etiquetas', 
          code: '003', 
          description: 'Produzimos rótulos e etiquetas para qualquer necessidade, com designs únicos.',
          materials: 'Papéis adesivos, Impressão personalizada, Cortes especiais, Laminados protetores.',
          image: 'https://i.pinimg.com/736x/ac/36/ac/ac36ace09a4c5340d07896fae5437316.jpg' // Link para a imagem do serviço
        },
        { 
          title: 'Cartões de Visita', 
          code: '004', 
          description: 'Desenvolvemos cartões de visita profissionais que refletem sua marca.',
          materials: 'Papéis de alta gramatura, Acabamento fosco ou brilhante, Laminação, Corte personalizado.',
          image: 'https://i.pinimg.com/736x/84/c8/fd/84c8fd3dbb0d1fa27aeee9e51165c8a3.jpg' // Link para a imagem do serviço
        },
        { 
          title: 'Brindes Personalizados', 
          code: '005', 
          description: 'Oferecemos uma ampla gama de brindes personalizados para eventos e campanhas.',
          materials: 'Canecas, Canetas, Blocos de anotações, Bolsas, Pendrives, Etiquetas personalizadas.',
          image: 'https://i.pinimg.com/564x/9b/2b/d9/9b2bd996470fce72d78ccf48164d00d8.jpg' // Link para a imagem do serviço
        }
      ],
      showForm: false,
      showMessage: false,
      selectedService: null,
      formData: {
        quantity: '',
        materialsSelected: [],
        serviceDescription: '',
        contact: ''
      },
      totalPrice: 0.00
    };
  },

  methods: {
    openForm(service) {
      this.selectedService = service;
      this.showForm = true;
      this.totalPrice = 0.00;  // Resetando o preço ao abrir o formulário
    },
    closeForm() {
      this.showForm = false;
      this.formData = {
        quantity: '',
        materialsSelected: [],
        serviceDescription: '',
        contact: ''
      };
      this.totalPrice = 0.00;  // Resetando o preço ao fechar o formulário
    },



    submitForm() {
  // Verifica se pelo menos um material foi selecionado
  if (this.formData.materialsSelected.length === 0) {
    alert('Por favor, selecione pelo menos um material.');
    return;
  }

  const orderData = {
    service: this.selectedService,
    quantity: this.formData.quantity,
    materialsSelected: this.formData.materialsSelected,
    serviceDescription: this.formData.serviceDescription,
    contact: this.formData.contact,
    totalPrice: this.totalPrice
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(orderData);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirecionar para a página do carrinho
  this.$router.push('/carrinho');

  // Fechar o formulário e mostrar mensagem
  this.showForm = false;
  this.showMessage = true;

  this.formData = {
    quantity: '',
    materialsSelected: [],
    serviceDescription: '',
    contact: ''
  };
},

    closeMessage() {
      this.showMessage = false;
    },
    updatePrice() {
      const quantity = parseInt(this.formData.quantity) || 0;
      const materialCount = this.formData.materialsSelected.length;
      // Calcula o número de grupos de 20 itens
      const priceIncreaseGroups = Math.floor(quantity / 20);
      // Atualiza o preço total com base na quantidade e grupos
      this.totalPrice = 100.00 + (priceIncreaseGroups * 50.00) + (materialCount * 90.00);
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.container-selecao-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #720372;
  text-align: center;
  font-weight: 600;
  justify-content: center;
}

.containerDisciplina {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 1100px;
  margin: 20px auto;
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-container {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 0, 0.103);
  border-radius: 8px;
  box-shadow: 0 0 10px  #4002462f;
  padding: 20px;
}

.service-left {
  flex: 1;
}

.service-square {
  width: 350px;
  height: 150px;
  background-color: #cb6ce6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  position: relative;
}

.service-image {
  width: 350px; /* Controla o tamanho da imagem */
  height: 150px; /* Controla o tamanho da imagem */
  border-radius: 8px;
  /*object-fit: contain; /* Garante que a imagem seja exibida corretamente */

}

.service-right {
  flex: 2;
  margin-left: 20px;
}

.service-right h3 {
  font-size: 24px;
  color: #720372;
  margin-bottom: 10px;
}

.service-right p {
  margin-bottom: 10px;
}

.service-right button {
  background-color: #720372;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.service-right button:hover {
  background-color: #9e1d9e;
}

.modal-content {
  background: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 1000px;
  height: 90%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-group textarea {
  resize: vertical;
}

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 50px;
 
}

.form-buttons button {
  background-color: #720372;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  
}

.form-buttons button:hover {
  background-color: #9e1d9e;
  
}

.thank-you-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.thank-you-message {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 350px;
}

.thank-you-message button {
  background-color: #720372;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.thank-you-message button:hover {
  background-color: #9e1d9e;
}

.preço {
  font-size: larger;
  color: #161416e0;
}

.enviar {
  height: 50px;
  width: 160px;
  font-size: large;
}

.cancelar {
  height: 50px;
  width: 150px;
  font-size: large;
}
</style>