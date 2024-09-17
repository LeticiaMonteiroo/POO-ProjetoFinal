<template>
  <section>
    <HeaderComponent />

    <!-- Conteúdo principal -->
    <div class="produtos-container">
      <div class="container-selecao-title">Sua criatividade começa aqui!</div>

      <!-- Barra de pesquisa -->
      <div class="search-bar-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Pesquisar produtos..."
          class="search-bar"
        />
      </div>

      <!-- Container de produtos -->
      <div class="produtos-grid">
        <div 
          class="produto-item" 
          v-for="produto in filteredProdutos" 
          :key="produto.id"
          @click="goToDetalhes(produto.id)"
        >
          <div class="produto-info">
            <div class="foto-container">
              <img :src="produto.imagem" :alt="produto.nome" />
            </div>
            <h3>{{ produto.nome }}</h3>
            <p class="avaliacoes">{{ produto.avaliacoes }} Avaliações</p>
            <p class="preco">{{ produto.preco }}</p>
          </div>
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
  name: 'ProdutosPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      produtos: [
        {
          id: 1,
          nome: 'Caderno Universitário - 10 Matérias',
          preco: 'R$ 29,99',
          avaliacoes: '30',
          imagem: 'https://m.media-amazon.com/images/I/51qt5Zw+CUL._AC_SY300_SX300_.jpg',
        },
        {
          id: 2,
          nome: 'Mochila Feminina Faculdade',
          preco: 'R$ 89,99',
          avaliacoes: '20',
          imagem: 'https://m.media-amazon.com/images/I/61SSmqSt+OL._AC_SX679_.jpg',
        },

        {
          id: 3,
          nome: 'Estojo Escolar Grande',
          preco: 'R$ 33,60',
          avaliacoes: '15',
          imagem: 'https://m.media-amazon.com/images/I/71Bh-44GxtL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 4,
          nome: 'Caderno Executivo Costurado Capa Dura',
          preco: 'R$ 35,90',
          avaliacoes: '53',
          imagem: 'https://m.media-amazon.com/images/I/51A54xjw-dL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 5,
          nome: 'STABILO point 88 – Em 15 cores',
          preco: 'R$ 120,90',
          avaliacoes: '20',
          imagem: 'https://m.media-amazon.com/images/I/81zKoOj50SL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 6,
          nome: 'Agenda Planner 2025 - Capa Floral, 160 Páginas',
          preco: 'R$ 45,90',
          avaliacoes: '35',
          imagem: 'https://m.media-amazon.com/images/I/6141U732frL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 7,
          nome: 'Lápis de Cor Aquarelável 12 Cores',
          preco: 'R$ 29,90',
          avaliacoes: '40',
          imagem: 'https://m.media-amazon.com/images/I/51Qo-e1jLBL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 8,
          nome: 'Kit de Canetas Gel Neon c/ 12 Unidades',
          preco: 'R$ 25,99',
          avaliacoes: '60',
          imagem: 'https://m.media-amazon.com/images/I/61RSaboiFDL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 9,
          nome: 'Caderno Inteligente – Tamanho Grande, Folhas Pautadas',
          preco: 'R$ 135,90',
          avaliacoes: '45',
          imagem: 'https://m.media-amazon.com/images/I/51pNysYjzFL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 10,
          nome: 'Pasta de Documentos ACP 1134',
          preco: 'R$ 85,00',
          avaliacoes: '25',
          imagem: 'https://m.media-amazon.com/images/I/61qqk93VvNL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 11,
          nome: 'Caneca Térmica Inox com Tampa - 500ml',
          preco: 'R$ 49,99',
          avaliacoes: '32',
          imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQvXoneq5g24BPFNdaWrS3M62yMNUP5pm3Uyiowx8HWf-aWt7M5im2GA2MpkYl2nW8Wtvd7wwcOGkICYbfDbriTyZPdrSzGEeSCYtTAW0pv9Nq6ho0x-3f0A&usqp=CAE'
        },
        {
          id: 12,
          nome: 'Organizador de Mesa com Portas-canetas',
          preco: 'R$ 55,00',
          avaliacoes: '15',
          imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-MQHQkPpAuuI4oGCyKrYphpyXuXrN4Czi1u109OPIuQCpaVmgWi5CV9jmdCyoVnKGO_-O0lL-ncuKnSmS1RqFkJgyR19iKTomOwA43bzl&usqp=CAE'
        },
        {
          id: 13,
          nome: 'Caneta Esferográfica Premium - 4 Unidades',
          preco: 'R$ 39,90',
          avaliacoes: '22',
          imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWaCrDv8Ajjks5-9TnyCr7zUZ644zqYsuuZr3USV92qoSl11SLU7D6LdJD7E_vckEzos-RRuSa_yOIz6SKP6EK95RPmU0Q1E-0rdX1iKY&usqp=CAE'
        }, 
        {
          id: 14,
          nome: 'Bloco de Notas Adesivas Coloridas - 400 Folhas',
          preco: 'R$ 21,50',
          avaliacoes: '28',
          imagem: 'https://m.media-amazon.com/images/I/61sg2Z+W6NL._AC_SX300_SY300_.jpg'
        },
        {
          id: 15,
          nome: 'Marcador de Texto Fluorescente Stabilo - 6 Unidades',
          preco: 'R$ 36,90',
          avaliacoes: '50',
          imagem: 'https://achalajournal.com.br/wp-content/uploads/2024/01/achala-journal-stabilo-boss-shine-kit-6.png'
        },
        {
          id: 16,
          nome: 'Marcador Artístico Permanente Evoke - 12 Unidades',
          preco: 'R$ 55,90',
          avaliacoes: '24',
          imagem: 'https://m.media-amazon.com/images/I/81TcWQ6d9lL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 17,
          nome: 'Lapiseira 0.5mm com Grip Ergonômico',
          preco: 'R$ 19,80',
          avaliacoes: '37',
          imagem: 'https://m.media-amazon.com/images/I/51wSjSZScEL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        ],
      searchQuery: '',
    };
  },
  computed: {
    filteredProdutos() {
      const query = this.searchQuery.toLowerCase();
      return this.produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    goToDetalhes(id) {
      this.$router.push({ name: 'DetalhesProduto', params: { produtoId: id } });
    },
    
  },
};
</script>

<style scoped>
.container-selecao-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #720372;
  text-align: center;
  font-weight: 600;
}

.produtos-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 1100px;
  margin: 20px auto;
}

.search-bar-container {
  margin-bottom: 20px;
  text-align: center;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.produtos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
}

.produto-item {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.produto-item:hover {
  transform: scale(1.05);
}

.foto-container {
  margin-bottom: 10px;
}

.foto-container img {
  width: 150px;
  height: auto;
  border-radius: 10px;
}

h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.avaliacoes {
  font-size: 14px;
  color: #5a849f;
  margin-bottom: 5px;
}

.preco {
  font-size: 16px;
  font-weight: bold;
  color: #4B0082;
}
</style>