<template>
  <HeaderComponent/>

  <!-- Modal de aviso -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <h2>Bem-vindo ao Mural Criativo</h2>
      <p>Aqui estão vídeos selecionados para te inspirar a criar com os produtos que você encontra na nossa loja.</p>
      <button @click="closeModal">OK</button>
    </div>
  </div>

  <!-- Conteúdo principal -->
  <div class="containerDisciplina">
    <!-- Container da barra de pesquisa e botão de pesquisa -->
    <div class="search-filter-container">
      <input 
        type="text" 
        class="form-control search-bar" 
        placeholder="Pesquise aqui..." 
        v-model="searchQuery"
        list="videoList"
      />
      <datalist id="videoList">
        <option 
          v-for="video in filteredItems" 
          :key="video.code" 
          :value="video.name"
        ></option>
      </datalist>
      <button class="search-button" @click="performSearch">
        <img src="../assets/search-icon.png" alt="Search Icon" />
      </button>
    </div>

    <!-- Conteúdo dos vídeos -->
    <div class="contentVideo">
      <div 
        v-for="video in filteredItems" 
        :key="video.code" 
        class="video-container"
      >
        <div class="video-left">
          <iframe 
            :src="video.link" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-right">
          <h3 v-html="highlightText(video.name)"></h3>
          <p v-html="highlightText(video.description)"></p>
          <p><strong>Materiais:</strong> <span v-html="highlightText(video.subject)"></span></p>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent/>
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
      searchQuery: '',
      showModal: true, // Controla a exibição do modal
      items: [
        { 
          name: 'Bullet Journal 2024', 
          code: '001', 
          link: 'https://www.youtube.com/embed/hUX2Ray8CLY',
          description: 'Aprenda a criar seu Bullet Journal.',
          subject: 'Caderno Leuchtturm1917, Canetas fineliners Sakura Pigma Micron, Canetas coloridas Staedtler, Marcadores Tombow, Adesivos Pipsticks, Régua de acrílico, Carimbos de borracha, Washi tape.'
        },
        { 
          name: 'Novidades do Mercado Internacional - Mês de Setembro', 
          code: '002', 
          link: 'https://www.youtube.com/embed/iGVelNVMOn8',
          description: 'Descubra as últimas novidades do mercado internacional.',
          subject: 'Cadernos Leuchtturm1917, Canetas Pigma Micron, Marcadores Tombow Dual Brush, Washi tape MT, Papéis adesivos Moleskine, Lápis Coloridos Prismacolor, Apontadores KUM, Corretores de fita Tombow.'
        },
        { 
          name: 'Aula de Pintura Iniciantes', 
          code: '003', 
          link: 'https://www.youtube.com/embed/EgIJGPodLJA',
          description: 'Curso básico de pintura para iniciantes.',
          subject: 'Tintas Winsor & Newton, Papel Canson Montval 300g/m², Pincéis Da Vinci, Paleta Masterson'
        },
        { 
          name: 'Ranking das Melhores Canetas de Tons Roxos', 
          code: '004', 
          link: 'https://www.youtube.com/embed/X8KZ6UrQKuM',
          description: 'Veja as melhores canetas de tons roxos no mercado.',
          subject: 'Sketchbook, Prismacolor Col-Erase Pencil, Winsor and Newton Brush Marker, Prismacolor Premier Pencil, Aquarel Watercolor Pencil #57, Zig Writer, Metallic Gelly Roll Pen, Chalkola Marker, Koh-I-Nor Progresso Pencil, Stabilo Point 88, Tombow Brush Pen.'
        },
        { 
          name: 'Criando com Conforto: Aquarelas e Marcadores em Ação', 
          code: '005', 
          link: 'https://www.youtube.com/embed/n2otT7dax-E',
          description: 'Explorando técnicas com aquarelas e marcadores.',
          subject: 'Prismacolor Premier Pencil Caran Ache Luminance, Aquarel Watercolor Pencil #57 Faber-Castell Albrecht Dürer, Zig Writer Uni Pin, Metallic Gelly Roll Pen Sakura Gelly Roll, Chalkola Marker Arteza'
        },
      ]
    };
  },

  computed: {
    filteredItems() {
      if (this.searchQuery === '') {
        return this.items;
      }
      const query = this.searchQuery.toLowerCase();
      return this.items.filter(video => 
        video.name.toLowerCase().includes(query) || 
        video.code.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.subject.toLowerCase().includes(query)
      );
    }
  },

  methods: {
    performSearch() {
      console.log(`Pesquisa realizada: ${this.searchQuery}`);
    },
    closeModal() {
      this.showModal = false;
    },
    highlightText(text) {
      if (!this.searchQuery) return text;

      const regex = new RegExp(`(${this.searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
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

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 80%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.modal h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.modal p {
  font-size: 16px;
  margin-bottom: 20px;
}

.modal button {
  background-color: #cb6ce6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.modal button:hover {
  background-color:  #720372;
}

/* Estilo para a marcação de destaque */
mark {
  background-color: yellow;
  color: black;
  padding: 0.2em;
  border-radius: 3px;
}

/* Restante do seu CSS */
.containerDisciplina {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 1100px;
  margin: 20px auto;
}

.search-filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.search-bar {
  width: 70%;
  padding: 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #cb6ce6;
  
}

.search-button {
  background-color:  #cb6ce6;
  border: none;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.search-button img {
  width: 20px;
  height: 20px;
}

.contentVideo {
  margin-top: 20px;
}

.video-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 0, 0.103);
  border-radius: 8px;
  box-shadow: 0 0 10px  #4002462f;
  padding: 20px;
  margin-bottom: 20px;
}

.video-left {
  flex: 1;
}

.video-right {
  flex: 1;
  padding-left: 20px;
}

.video-container h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.video-container p {
  margin: 5px 0;
}

iframe {
  width: 100%;
  height: 250px; /* Altura aumentada */
  border-radius: 8px;
  border: none;
}
</style>
