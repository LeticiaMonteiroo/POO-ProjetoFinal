<template>
  <section>
    <HeaderComponent/>

    <div class="criar-postagem-page">
      <form class="wrapper" @submit.prevent="handleSubmit">
        <h3 class="criar-postagem-title">Adicionar Avaliação</h3>

        <p>Título</p>
        <div class="input-box">
          <input type="text" placeholder="Digite um Título para a sua Avaliação" v-model="forumName">
        </div>

        <p>Descrição</p>
        <div class="comentario">
          <textarea v-model="description" cols="30" rows="5" placeholder="Deixe um comentário..."></textarea>
        </div>

        <p>Imagens</p>
        <div class="input-box">
          <input type="file" accept="image/*" multiple @change="handleFileUpload" />
        </div>

        <div class="selected-images" v-if="selectedFiles.length > 0">
          <h4>Imagens Selecionadas:</h4>
          <div class="image-preview">
            <img v-for="(file, index) in selectedFiles" :key="index" :src="URL.createObjectURL(file)" alt="Imagem selecionada" />
          </div>
        </div>

        <div class="criar-postagem-buttons">
          <button type="button" class="btn1" @click="handleCancel">Cancelar</button>
          <button type="submit" class="btn">Enviar</button>

        </div>
      </form>
    </div>

    <SuccessMessageModal
      v-if="isModalVisible"
      :show="isModalVisible"
      message="Avaliação Adicionada com Sucesso!!"
      @close="isModalVisible = false"
    />

    <FooterComponent/>
  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import SuccessMessageModal from '../components/SuccessMessageModal.vue';

export default {
  name: 'AdicionarPost',
  components: {
    HeaderComponent,
    FooterComponent,
    SuccessMessageModal
  },
  data() {
    return {
      isModalVisible: false,
      forumName: '',
      description: '',
      forumLink: '',
      selectedFiles: [], // Armazena os arquivos selecionados
    };
  },
  methods: {
    handleFileUpload(event) {
      // Converte a lista de arquivos em um array
      this.selectedFiles = Array.from(event.target.files);
      console.log('Arquivos selecionados:', this.selectedFiles);
    },
    handleSubmit() {
      // Adicione a lógica para enviar o formulário, incluindo as imagens selecionadas
      console.log('Formulário enviado:', {
        forumName: this.forumName,
        description: this.description,
        selectedFiles: this.selectedFiles,
      });
      this.isModalVisible = true; // Exibe o modal de sucesso
    },
    handleCancel() {
      // Limpa os campos do formulário
      this.forumName = '';
      this.description = '';
      this.selectedFiles = [];
    }
  },
};
</script>

<style scoped>
.criar-postagem-title {
  color:  #4B0082;
}

.criar-postagem-page {
  padding: 50px;
  display: flex;
  flex: 1;
}

.wrapper {
  margin: auto;
  width: 500px;
  background: #ee83f84f;
  color: #000;
  border-radius: 10px;
  padding: 30px 40px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.wrapper h3 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper p {
  color: #000;
  font-size: 14px;
}

.input-box {
  width: 100%;
  height: 40px;
  background: #fff;
  margin-bottom: 20px;
}

.input-box input {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  background: #fff;
  border: 1px solid #e3e4e8;
  border-radius: 10px;
  padding: 5px 10px;
}

.input-box input::placeholder {
  color: #7c7c8a;
}

.comentario {
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e3e4e8;
  border-radius: 10px;
  outline: none;
  resize: none;
  height: 100px;
}

.selected-images {
  margin-top: 20px;
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
}

.image-preview img {
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: 100px; /* Ajuste o tamanho conforme necessário */
  object-fit: cover;
  margin-right: 10px;
  margin-bottom: 10px;
}

.criar-postagem-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  background-color:  #4B0082;
  color: #fff;
  height: 50px;
  width: 150px;
  border: 0;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
}

.btn1 {
  background-color: #e3e4e8;
  color: #000;
  height: 50px;
  width: 150px;
  border: 0;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
}
</style>
