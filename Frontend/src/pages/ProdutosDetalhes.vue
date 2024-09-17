<template>
  <section class="main-container">
    <HeaderComponent />
    <div>
      <div class="produtos-container">
        <div v-if="produto" class="detalhes-container">
          <div class="foto-container">
            <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem" />
          </div>
          <div class="info-container">
            <h1 class="produto-nome">{{ produto.nome }}</h1>
            <p class="produto-preco">{{ produto.preco }}</p>
            <p class="produto-avaliacoes">{{ produto.avaliacoes }} Avaliações</p>
            <p class="produto-descricao">{{ produto.descricao }}</p>

            <!-- Botões para comprar e adicionar ao carrinho -->
            <div class="botoes-container">
              <button class="btn-comprar" @click="handlePurchase">Comprar</button>

              <button class="btn-carrinho" @click="addToCart">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
      
      <hr class="linha-separadora">

      <!-- Seção dos Produtos mais vendidos-->
      <div class="secao-mais-vendidos">
        <h2 class="mais-vendidos-titulo">LEVE <span> TAMBÉM</span></h2>
        <div class="secao-track-container">
          <ul class="secao-track">
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-caneta-mentos.png" alt="Produto 1">
                <div class="texto-produto">
                    <h3>Caneta Esferográfica Compactor -JET LUX- Mentos c/4 cores</h3>
                    <p>R$ 11,99 <span>em até 3x de R$ 3,99</span></p>
                    <button class="btn1-carrinho" @click="addToCart">Adicionar</button>
                </div>

            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-caderno.png" alt="Produto 1">
                <div class="texto-produto">
                    <h3>Caderno Colegial - DAC - Milky c/ 80 folhas</h3>
                    <p>R$ 67,99 <span>em até 3x de R$ 22,66</span></p>
                    <button class="btn2-carrinho">Adicionar</button>
                </div>

            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendidos-bloquinho.png" alt="Produto 1">
                <div class="texto-produto">
                    <h3>Bloco Adesivo - BRW - CUT - 70x70mm - 30F</h3>
                    <p>R$ 9,99 <span>em até 3x de R$ 3,33</span></p>
                    <button class="btn3-carrinho">Adicionar</button>
                </div>
 
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-lapis-de-cor.png" alt="Produto 1">
                <div class="texto-produto">
                    <h3>Lápis de Cor - Maped - Color'Peps Infinity 12 Cores</h3>
                    <p>R$ 29,99 <span>em até 3x de R$ 9,99</span></p>
                    <button class="btn4-carrinho">Adicionar</button>
                </div>
 
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-caderno-vertical.png" alt="Produto 1">
                <div class="texto-produto">
                    <h3>Caderno Vertical - Animativa - Lavender - 80 Folhas</h3>
                    <p>R$ 15,99 <span>em até 3x de R$ 5,33</span></p>
                    <button class="btn5-carrinho">Adicionar</button>
                </div>
          
            </li>
          </ul>
        </div>
      </div>

      <hr class="linha-separadora">

      <!-- Seção de Avaliações -->
      <section class="secao-avaliacoes">
        <div class="avaliacoes-container">
          <h2 class="avaliacoes-titulo">Avaliações</h2>

          <!-- Avaliação 1 -->
          <div class="avaliacao">
            <div class="avaliacao-imagem">
              <img src="https://cdn-icons-png.flaticon.com/512/7382/7382094.png" alt="Cliente 1">
            </div>
            <div class="avaliacao-info">
              <div class="avaliacao-nome">João Silva</div>
              <div class="avaliacao-estrelas">
                <span class="estrela">★</span>
                <span class="estrela">★</span>
                <span class="estrela">★</span>
                <span class="estrela">★</span>
                <span class="estrela">☆</span>
              </div>
              <div class="avaliacao-texto">
                "Adorei o produto! A qualidade é excelente e o atendimento foi ótimo. Recomendo a todos!"
              </div>
            </div>
          </div>

            <!-- Avaliação 2 -->
    <div class="avaliacao">
      <div class="avaliacao-imagem">
        <img src="https://cdn-icons-png.flaticon.com/512/7382/7382094.png" alt="Cliente 2">
      </div>
      <div class="avaliacao-info">
        <div class="avaliacao-nome">Maria Oliveira</div>
        <div class="avaliacao-estrelas">
          <span class="estrela">★</span>
          <span class="estrela">★</span>
          <span class="estrela">★★</span>
          <span class="estrela">☆</span>
          <span class="estrela">☆</span>
        </div>
        <div class="avaliacao-texto">
          "Muito bom, mas a entrega poderia ser mais rápida. No geral, estou satisfeita."
        </div>
      </div>
    </div>

      <!-- Avaliação 2 -->
      <div class="avaliacao">
      <div class="avaliacao-imagem">
        <img src="https://cdn-icons-png.flaticon.com/512/7382/7382094.png" alt="Cliente 2">
      </div>
      <div class="avaliacao-info">
        <div class="avaliacao-nome">Joana Gomes</div>
        <div class="avaliacao-estrelas">
          <span class="estrela">★</span>
          <span class="estrela">★</span>
          <span class="estrela">★★</span>
          <span class="estrela">☆</span>
          <span class="estrela">☆</span>
        </div>
        <div class="avaliacao-texto">
          "Minha filha amou todo o material que eu comprei aqui."
        </div>
      </div>
    </div>


          <!-- Formulário de Avaliação -->
          <div class="formulario-avaliacao">
            <h3 class="formulario-avaliacao2">Já Comprou esse produto? Deixe sua avaliação</h3>
            <button type="submit" class="formulario-avaliacao3" @click="gotoAvaliacao">Enviar Avaliação</button>
          </div>
        </div>
      </section>

      <hr class="linha-separadora">

      <!-- Seção dos Promoções-->
      <div class="secao-mais-vendidos">
        <h2 class="mais-vendidos-titulo"><span>PROMOÇÕES</span> DA SEMANA</h2>
        <div class="secao-track-container">
          <ul class="secao-track">
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-estojo.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Estojo E240 - DAC - Antiestresse Poosh Rosa</h3>
                <p>R$ 29,99 <span>em até 3x de R$ 9,99</span></p>
                <button class="btn6-carrinho">Adicionar</button>
   
                </div>
               
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-borracha.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Borracha Escolar - Molin - Rotativa c/ Proteção</h3>
                <p>R$ 2,99 <span>em até 3x de R$ 0,99</span></p>
                <button class="btn7-carrinho">Adicionar</button>
                </div>
               
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-lapis-de-cor.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Lápis de Cor Eco - Faber-Castell - 48 Cores Aquarelável</h3>
                <p>R$ 109,99 <span>em até 3x de R$ 36,66</span></p>
                <button class="btn8-carrinho">Adicionar</button>
                </div>
             
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-mochila.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Mochila - Rocie - Escolar Básica Winth</h3>
                <p>R$ 52,99 <span>em até 3x de R$ 17,66</span></p>
                <button class="btn9-carrinho">Adicionar</button>
                </div>
        
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-caneta.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Caneta Esferográfica - CIS - Spiro 8 Cores 0.7mm</h3>
                <p>R$ 33,49 <span>em até 3x de R$ 11,16</span></p>
                <button class="btn10-carrinho">Adicionar</button>
                </div>
            
            </li>
          </ul>
        </div>
      </div>

   

<div id="aviso" class="hidden">Produto adicionado ao carrinho!</div>


    </div>
    <FooterComponent />
  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'DetalhesProduto',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  props: ['productId'],
  data() {
    return {
      produto: null,
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
          imagem: 'https://m.media-amazon.com/images/I/71Bh-44GxtL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 4,
          nome: 'Caderno Executivo Costurado Capa Dura',
          preco: 'R$ 35,90',
          avaliacoes: '53',
          imagem: 'https://m.media-amazon.com/images/I/51A54xjw-dL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 5,
          nome: 'STABILO point 88 – 15 cores',
          preco: 'R$ 120,90',
          avaliacoes: '20',
          imagem: 'https://m.media-amazon.com/images/I/81zKoOj50SL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 6,
          nome: 'Agenda Planner 2025 - Capa Floral, 160 Páginas',
          preco: 'R$ 45,90',
          avaliacoes: '35',
          imagem: 'https://m.media-amazon.com/images/I/6141U732frL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 7,
          nome: 'Lápis de Cor Aquarelável 12 Cores',
          preco: 'R$ 29,90',
          avaliacoes: '40',
          imagem: 'https://m.media-amazon.com/images/I/51Qo-e1jLBL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 8,
          nome: 'Kit de Canetas Gel Neon c/ 12 Unidades',
          preco: 'R$ 25,99',
          avaliacoes: '60',
          imagem: 'https://m.media-amazon.com/images/I/61RSaboiFDL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 9,
          nome: 'Caderno Inteligente – Tamanho Grande, Folhas Pautadas',
          preco: 'R$ 135,90',
          avaliacoes: '45',
          imagem: 'https://m.media-amazon.com/images/I/51pNysYjzFL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 10,
          nome: 'Pasta de Documentos ACP 1134',
          preco: 'R$ 85,00',
          avaliacoes: '25',
          imagem: 'https://m.media-amazon.com/images/I/61qqk93VvNL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 11,
          nome: 'Caneca Térmica Inox com Tampa - 500ml',
          preco: 'R$ 49,99',
          avaliacoes: '32',
          imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQvXoneq5g24BPFNdaWrS3M62yMNUP5pm3Uyiowx8HWf-aWt7M5im2GA2MpkYl2nW8Wtvd7wwcOGkICYbfDbriTyZPdrSzGEeSCYtTAW0pv9Nq6ho0x-3f0A&usqp=CAE',
        },
        {
          id: 12,
          nome: 'Organizador de Mesa com Portas-canetas',
          preco: 'R$ 55,00',
          avaliacoes: '15',
          imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-MQHQkPpAuuI4oGCyKrYphpyXuXrN4Czi1u109OPIuQCpaVmgWi5CV9jmdCyoVnKGO_-O0lL-ncuKnSmS1RqFkJgyR19iKTomOwA43bzl&usqp=CAE',
        },
        {
          id: 13,
          nome: 'Caneta Esferográfica Premium - 4 Unidades',
          preco: 'R$ 39,90',
          avaliacoes: '22',
          imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWaCrDv8Ajjks5-9TnyCr7zUZ644zqYsuuZr3USV92qoSl11SLU7D6LdJD7E_vckEzos-RRuSa_yOIz6SKP6EK95RPmU0Q1E-0rdX1iKY&usqp=CAE',
        },
        {
          id: 14,
          nome: 'Bloco de Notas Adesivas Coloridas - 400 Folhas',
          preco: 'R$ 21,50',
          avaliacoes: '28',
          imagem: 'https://m.media-amazon.com/images/I/61sg2Z+W6NL._AC_SX300_SY300_.jpg',
        },
        {
          id: 15,
          nome: 'Marcador de Texto Fluorescente Stabilo Boss Pastel c/ 6 Unidades',
          preco: 'R$ 36,90',
          avaliacoes: '50',
          imagem: 'https://achalajournal.com.br/wp-content/uploads/2024/01/achala-journal-stabilo-boss-shine-kit-6.png',
        },
        {
          id: 16,
          nome: 'Marcador Artístico Permanente Evoke Ponta Fina, Blister com 12 Unidades',
          preco: 'R$ 55,90',
          avaliacoes: '24',
          imagem: 'https://m.media-amazon.com/images/I/81TcWQ6d9lL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          id: 17,
          nome: 'Lapiseira 0.5mm com Grip Ergonômico',
          preco: 'R$ 19,80',
          avaliacoes: '37',
          imagem: 'https://m.media-amazon.com/images/I/51wSjSZScEL.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        ],
    };
  },

  mounted() {
    const produtoId = parseInt(this.$route.params.produtoId);
    this.produto = this.produtos.find(p => p.id === produtoId);
    
    // Certifica-se de que a caixa de aviso comece oculta
    const aviso = document.getElementById('aviso');
    aviso.classList.add('hidden');
  },
  methods: {

    handlePurchase() {
    this.addToCart(); // Adiciona o produto ao carrinho
    this.gotoCarrinho(); // Redireciona para a página do carrinho
  },


    addToCart() {
      const produto = {
        id: this.produto.id,
        nome: this.produto.nome,
        preco: this.produto.preco,
        imagem: this.produto.imagem,
      };
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(produto);
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Exibir a caixa de aviso
      const aviso = document.getElementById('aviso');
      aviso.classList.remove('hidden');

      // Ocultar a caixa de aviso após 8 segundos
      setTimeout(() => {
        aviso.classList.add('hidden');
      }, 4000); 

      
    },

    gotoCarrinho() {
    this.$router.push({ name: 'Carrinho' });
  },

  gotoAvaliacao() {
    this.$router.push({ name: 'Avaliacao' });
  },


  },
};


</script>



<style scoped>
/* Estilos Gerais */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

header, footer {
  flex-shrink: 0;
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

.detalhes-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.foto-container {
  flex: 0 0 400px;
}

.produto-imagem {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 60px;
}

.info-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.produto-nome {
  font-size: 2em;
  font-weight: bold;
  color: #6a1b9a;
  margin-bottom: 10px;
  overflow-wrap: break-word;
  margin-left: 120px;
}

.produto-preco {
  font-size: 1.6em;
  color: #333;
  margin-bottom: 10px;
  margin-left: 120px;
}

.produto-avaliacoes {
  font-size: 1.4em;
  color: #555;
  margin-bottom: 20px;
  margin-left: 120px;
}

.produto-descricao {
  font-size: 1.2em;
  color: #666;
}

.botoes-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 56px;
}

button {
  width: 500px;
  height: 55px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.8em;
  justify-items: center;
  margin-left: 60px;
}

.btn-comprar {
  background-color: #6a1b9a;
  color: white;
}

.btn-carrinho {
  background-color: #9d73e2;
  color: white;
}

.linha-separadora {
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 40px 0;
}

/* Seção dos Produtos mais vendidos //////////////////////////////////////////////////*/

.secao-mais-vendidos {
    padding: 30px 0;
    text-align: center;
    margin-top: 50px;
}

.mais-vendidos-titulo {
    font-size: 20px;
    font-weight: normal;
    color: #333;
    margin-bottom: 20px;
}

.mais-vendidos-titulo span {
    font-weight: bold;
}

.secao-track-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.secao-track {
    display: flex;
    gap: 20px;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.secao-slide-mais-vendidos {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 180px; /* Ajuste o tamanho conforme necessário */
}

.secao-slide-mais-vendidos img {
    width: 150px; /* Ajuste o tamanho da imagem conforme necessário */
    height: auto;
    object-fit: contain;
    margin-bottom: 10px;
}

.texto-produto {
    text-align: center;
}

.texto-produto h3 {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
}

.texto-produto p {
    font-size: 12px;
    color: #555;
    margin: 5px 0;
}

.btn1-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 5px;
}

.btn2-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 5px;
}

.btn3-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 25px;
}

.btn4-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 5px;
}

.btn5-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 5px;
}

.btn6-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 10px;
}

.btn7-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 34px;
}
.btn8-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 5px;
}
.btn9-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 20px;
}
.btn10-carrinho {
  background-color: #9d73e2;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 1.0em;
  margin-left: -2px;
  margin-top: 20px;
}

/* Seção de Avaliações */
.secao-avaliacoes {
  padding: 1px 0;
  background-color: #ffea0017;
  margin-bottom: 0px;
}

.avaliacoes-titulo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  /* margin-bottom: 20px; */
}

.avaliacoes-container {
  max-width: 1100px;
  margin: 0 auto;
}

.avaliacao {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
  
}

.avaliacao-imagem {
  flex: 0 0 80px;
}

.avaliacao-imagem img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avaliacao-info {
  flex: 1;
}

.avaliacao-nome {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.avaliacao-estrelas {
  margin-bottom: 10px;
}

.avaliacao-estrelas .estrela {
  color: #ffcc00;
  font-size: 1.2em;
}

.avaliacao-texto {
  font-size: 1em;
  color: #666;
}

.formulario-avaliacao {
  margin-top: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.formulario-avaliacao h3 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
}

.formulario-avaliacao input[type="text"],
.formulario-avaliacao textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

}

.formulario-avaliacao button {
  background-color: #6a1b9a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 10px;
}

.formulario-avaliacao2{
  margin-left: 150px;
  justify-items: center;
  margin-top: 10px;
}

.formulario-avaliacao3{
  margin-left: 250px;
}

.aviso {
  position: fixed;
  top: 20px; /* Distância do topo */
  right: 20px; /* Distância da direita */
  background-color: #effc3a; /* Cor de fundo */
  color: white; /* Cor do texto */
  padding: 15px; /* Espaçamento interno */
  border-radius: 5px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  z-index: 1000; /* Certifique-se de que fique na frente */
  transition: opacity 0.5s ease; /* Transição suave */
  opacity: 1; /* Começa visível */
}

.hidden {
  opacity: 0; /* Escondido */
  pointer-events: none; /* Impede a interação */
}

.hidden {
  display: none;
}

#aviso {
  /* Estilos para a caixa de aviso */
  background-color: #7a1976; /* Cor de fundo verde */
  color: white; /* Texto branco */
  padding: 15px; /* Espaçamento interno */
  position: fixed; /* Fixo na tela */
  top: 20px; /* Distância do topo */
  right: 20px; /* Distância da direita */
  border-radius: 5px; /* Bordas arredondadas */
  z-index: 1000; /* Para garantir que fique na frente */
  transition: opacity 0.5s; /* Efeito de transição */
}


</style>