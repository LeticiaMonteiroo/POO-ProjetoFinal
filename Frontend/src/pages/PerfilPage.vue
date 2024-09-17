<template>
    <section>
      <HeaderComponent/>
  
      <div class="perfil-page">
        <!-- Se o modo de edição estiver ativo, exibe o formulário; caso contrário, exibe o perfil -->
        <div v-if="isEditing">
          <div class="perfil-page-imagem-div">
            <img class="perfil-page-imagem" :src="imageSrc" alt="">
          </div>
  
          <div>
            <input v-model="name" class="perfil-input" placeholder="Nome" />
            <textarea v-model="description" class="perfil-textarea" placeholder="Descrição"></textarea>
            <button @click="saveChanges" class="save-button">Salvar</button>
            <button @click="cancelEdit" class="cancel-button">Cancelar</button>
          </div>
        </div>
        <div v-else>
          <div class="perfil-page-imagem-div">
            <img class="perfil-page-imagem" :src="imageSrc" alt="">
          </div>
  
          <div>
            <div class="perfil-nome">{{ name }}</div>
            <div class="perfil-descricao">{{ description }}</div>
            <button @click="editProfile" class="edit-button">Editar Perfil</button>
          </div>
        </div>
      </div>
  
      <FooterComponent/>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  
  export default {
    name: 'PerfilPage',
    components: {
      HeaderComponent,
      FooterComponent
    },
  
    data() {
      return {
        name: null,
        description: null,
        imageSrc: '../assets/person.png',
        isEditing: false,  // Novo campo para controle do modo de edição
      }
    },
  
    async mounted() {
      await this.getInfosUser();
    },
  
    methods: {
      async getInfosUser() {
        try {
          const user_id = this.$route.params.user_id;
          const token = localStorage.getItem('token');
  
          const response = await axios.get(`http://localhost:8000/api/users/${user_id}/`, {
            headers: { authorization: `Token ${token}` }
          });
  
          this.name = response.data.name;
          this.description = response.data.description;
          this.semester_being_attended = response.data.semester_being_attended;
        } catch (err) {
          console.error('Erro ao obter informações do usuário:', err);
        }
      },
  
      editProfile() {
        this.isEditing = true;
      },
  
      async saveChanges() {
        try {
          const user_id = this.$route.params.user_id;
          const token = localStorage.getItem('token');
  
          await axios.put(`http://localhost:8000/api/users/${user_id}/`, {
            name: this.name,
            description: this.description
          }, {
            headers: { authorization: `Token ${token}` }
          });
  
          this.isEditing = false;
          this.getInfosUser(); // Atualiza as informações exibidas após salvar
        } catch (err) {
          console.error('Erro ao salvar alterações:', err);
        }
      },
  
      cancelEdit() {
        this.isEditing = false;
        this.getInfosUser(); // Recarrega as informações se o usuário cancelar
      }
    }
  }
  </script>
  
  <style scoped>
  .perfil-page {
    padding: 50px;
    display: flex;
    flex: 1;
  }
  
  .perfil-page-imagem-div {
    margin-right: 50px;
  }
  
  .perfil-page-imagem {
    height: 200px;
    background-color: beige;
    border-radius: 30px;
  }
  
  .perfil-nome {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  
  .perfil-descricao {
    margin-top: 20px;
    font-size: 20px;
    width: 1200px;
  }
  
  .perfil-input,
  .perfil-textarea {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .perfil-input {
    font-size: 18px;
  }
  
  .perfil-textarea {
    font-size: 16px;
    height: 150px;
    resize: vertical;
  }
  
  .save-button,
  .cancel-button,
  .edit-button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .save-button {
    background-color: #4CAF50;
    color: white;
  }
  
  .cancel-button {
    background-color: #f44336;
    color: white;
  }
  
  .edit-button {
    background-color: #2196F3;
    color: white;
  }
  </style>
  