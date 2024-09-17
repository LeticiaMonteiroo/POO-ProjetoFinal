<template>
    <HeaderComponent/>

<!-- Seção da barra de Informações -->
<div class="barra-info">
    <div class="item">
        <img src="../assets/barra-entrega.svg" alt="Ícone de Entrega"> <!-- Substitua pelo caminho do ícone correto -->
        <span>ENTREGAMOS para todo o Brasil</span>
    </div>
    <div class="item">
        <img src="../assets/barra-parcelamento.svg" alt="Ícone de Parcelamento">
        <span>PARCELAMENTO até 6x sem juros</span>
    </div>
    <div class="item">
        <img src="../assets/barra-pix.svg" alt="Ícone de Pagamento">
        <span>ACEITAMOS pagamento via PIX</span>
    </div>
    <div class="item">
        <img src="../assets/barra-mid-box-4.svg" alt="ícone de segurança">
        <span>AMBIENTE SEGURO compra protegida</span>
    </div> 
</div>

<!-- Seção do Carrossel -->
<div class="carousel">
    <button class="carousel-button prev-button" @click="prevSlide">◀</button>
    <div class="carousel-content" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
    <!-- Slide 1 -->
    <div class="carousel-slide">
        <img src="../assets/carrossel-image-caderno.webp" alt="Imagem 1">
    </div>
    <!-- Slide 2 -->
    <div class="carousel-slide">
        <img src="../assets/carrossel-image-canetas.webp" alt="Imagem 2">
    </div>
    <!-- Slide 3 -->
    <div class="carousel-slide">
        <img src="../assets/carrossel-image-presentes.webp" alt="Imagem 2">
    </div>
</div>
    <button class="carousel-button next-button" @click="nextSlide">▶</button>
</div>


<!-- Seção das Marcas -->
<div id="marcas">
        <h2 class="marcas-titulo">TRABALHAMOS COM AS MELHORES <span>MARCAS</span></h2>
        <div class="marcas-container">
            <img src="../assets/logo-tilibra.webp" alt="Marca 1">
            <img src="../assets/logo-stabilo.webp" alt="Marca 2">
            <img src="../assets/logo-tris.webp" alt="Marca 3">
            <img src="../assets/logo-lampada.webp" alt="Marca 4">
            <img src="../assets/logo-faber.webp" alt="Marca 5">
            <img src="../assets/logo-cis.webp" alt="Marca 6"> 
            <img src="../assets/logo-acrilex.webp" alt="Marca 7"> 
            <img src="../assets/logo-pentel.webp" alt="Marca 8"> 
        </div>
</div>

<!-- Seção de Produtos em Destaque-->
<div id="produtos">
    <h2 class="produtos-titulo">PRODUTOS EM <span>DESTAQUE</span></h2>
    <div class="produtos-container">
        <div class="produto-item">
            <img src="../assets/produto-agenda.png" alt="Agendas & Planners">
            <span>Agendas & Planners</span>
        </div>
        <div class="produto-item">
            <img src="../assets/produto-marca-texto2.jpg" alt="Marca textos">
            <span>Marca textos</span>
        </div>
        <div class="produto-item">
            <img src="../assets/produto-canetas1.png" alt="Canetas">
            <span>Canetas</span>
        </div>
        <div class="produto-item">
            <img src="../assets/produto-caderno.png" alt="Caderno Inteligente">
            <span>Caderno Inteligente</span>
        </div>
        <div class="produto-item">
            <img src="../assets/produto-mochila.png" alt="Mochila">
            <span>Mochila</span>
        </div>
        <div class="produto-item">
            <img src="../assets/produto-bloquinho.png" alt="Stabilo">
            <span>Bloquinho</span>
        </div>
        <div class="produto-item">
            <img src="../assets/produto-estojo.png" alt="Stabilo">
            <span>Estojo</span>
        </div>
    </div>
</div>

<!-- Seção Frete Grátis -->
<div class="frete-gratis-container">
    <div class="frete-gratis-banner">
        <img src="../assets/frete-gratis-img.png" alt="Frete grátis para todo Brasil" class="banner-img">
    </div>
    <div class="frete-gratis-info">
        <h2 class="marcas-titulo">FRETE GRÁTIS</h2>
        <p>SÓ AQUI VOCÊ NÃO PAGA FRETE PARA TER ESSAS BELEZINHAS EM SUA CASA. EM QUALQUER COMPRA GANHE O FRETE INTEIRAMENTE GRÁTIS.</p>
    </div>
</div>

<!-- Seção dos Produtos mais vendidos-->
<div class="secao-mais-vendidos">
    <h2 class="mais-vendidos-titulo">PRODUTOS <span> MAIS VENDIDOS</span></h2>
    <div class="secao-track-container">
        <ul class="secao-track">
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-caneta-mentos.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Caneta Esferográfica Compactor -JET LUX- Mentos c/4 cores</h3>
                <p>R$ 11,99 <span>em até 3x de R$ 3,99</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-caderno.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Caderno Colegial - DAC - Milky c/ 80 folhas</h3>
                <p>R$ 67,99 <span>em até 3x de R$ 22,66</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendidos-bloquinho.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Bloco Adesivo - BRW - CUT - 70x70mm - 30F</h3>
                <p>R$ 9,99 <span>em até 3x de R$ 3,33</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-lapis-de-cor.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Lápis de Cor - Maped - Color'Peps Infinity 12 Cores</h3>
                <p>R$ 29,99 <span>em até 3x de R$ 9,99</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/mais-vendido-caderno-vertical.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Caderno Vertical - Animativa - Lavender - 80 Folhas</h3>
                <p>R$ 15,99 <span>em até 3x de R$ 5,33</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
        </ul>
    </div>
</div>

<!-- Seção dos Promocoes-->
<div class="secao-mais-vendidos">
    <h2 class="mais-vendidos-titulo"><span>PROMOÇÕES</span> DA SEMANA</h2>
    <div class="secao-track-container">
        <ul class="secao-track">
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-estojo.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Estojo E240 - DAC - Antiestresse Poosh Rosa</h3>
                <p>R$ 29,99 <span>em até 3x de R$ 9,99</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-borracha.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Borracha Escolar - Molin - Rotativa c/ Proteção</h3>
                <p>R$ 2,99 <span>em até 3x de R$ 0,99</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-lapis-de-cor.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Lápis de Cor Eco - Faber-Castell - 48 Cores Aquarelável</h3>
                <p>R$ 109,99 <span>em até 3x de R$ 36,66</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-mochila.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Mochila - Rocie - Escolar Básica Winth</h3>
                <p>R$ 52,99 <span>em até 3x de R$ 17,66</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
            <li class="secao-slide-mais-vendidos">
                <img src="../assets/promocao-caneta.png" alt="Produto 1">
                <div class="texto-produto">
                <h3>Caneta Esferográfica - CIS - Spiro 8 Cores 0.7mm</h3>
                <p>R$ 33,49 <span>em até 3x de R$ 11,16</span></p>
                </div>
                <button class="buy-button">Comprar</button>
            </li>
        </ul>
    </div>
</div>

<!-- Seção sobre nós -->
<!-- <div class="sobre-nos-container">
    <div class="infos">
        <div class="title">
            <h2> Sobre Nós</h2>
        </div>
        <p> Papelaria criada pelas alunas de orientação a objetos da universidade de brasiia</p>
        <div class="laryssa">
            <p>pppppppppppppppp</p>
        </div>
        <div class="leticia">
            <p>kkkkkkkkkkkkkkkkkkkkk</p>
        </div>
    </div>
</div> -->

<!-- Seção newsletter -->
<div class="newsletter-container">
    <h3>NEWSLETTER</h3>
    <h1>Receba todas as promoções</h1>
    <p>Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</p>
    <form>
        <input type="email" placeholder="E-mail">
        <button type="submit">
            <span>→</span>
        </button>
    </form>
</div> 

    <FooterComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            currentSlide: 0,
            totalSlides: 3
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        }
    }
}
</script>


<style>

/*seção da barra de informações abaixo do header////////////////////////////////////////////////*/
.barra-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #DDA0DD; 
    padding: 10px 0;
    border-bottom: 2px solid #f4f4f4;
}

.barra-info .item {
    display: flex;
    align-items: center;
    color: #ffffff; 
    font-size: 14px;
}

.barra-info .item img {
    margin-right: 8px;
    width: 24px; 
    height: 24px; 
}

/*seção do carrossel abaixo da barra de informações/////////////////////////////////*/
.carousel {
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 100%;
max-width: 100%; 
margin: auto;
overflow: hidden;
}

.carousel-content {
display: flex;
transition: transform 0.5s ease;
width: 100%;
}

.carousel-slide {
min-width: 100%;
transition: transform 0.5s ease-in-out;
display: flex;
justify-content: center;
}

.carousel-slide img {
width: 100%;
height: auto;
object-fit: cover;
}

.carousel-button {
position: absolute;
top: 50%;
transform: translateY(-50%);
background: none;
border: none;
font-size: 2rem;
cursor: pointer;
z-index: 10;
padding: 10px;
color: #4B0082;
}

.prev-button {
left: 10px;
}

.next-button {
right: 10px;
}

/*seção com marcas que trabalhamos/////////////////////////////////////////////*/
#marcas {
    padding: 30px 0;
    text-align: center;
    margin-top: 110px;
} 

.marcas-titulo {
    font-size: 20px;
    font-weight: normal;
    color: #333;
    margin-bottom: 10px;
}

.marcas-titulo span {
    font-weight: bold;
}

.marcas-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 1px;
    padding: 30px 10px;
    background-color: #fbec5d; 
    border-radius: 10px;
    max-width: 80%;
    margin: 0 auto; 
}

.marcas-container img {
    max-height: 60px; 
    object-fit: contain; 
}

/* Seção de Produtos  em Destaque/////////////////////////////////////////////////////*/

#produtos {
    padding: 30px 0;
    text-align: center;
    margin-top: 50px; 
}

.produtos-titulo {
    font-size: 20px;
    font-weight: normal;
    color: #333;
    margin-bottom: 20px;
}

.produtos-titulo span {
    font-weight: bold;
}

.produtos-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px; 
    padding: 20px;
    max-width: 80%;
    margin: 0 auto; 
}

.produto-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 150px; 
}

.produto-item img {
    width: 100px; 
    height: auto;
    object-fit: contain; 
    margin-bottom: 10px;
}

.produto-item span {
    font-size: 14px;
    color: #333;
    margin-top: 5px;
}

/* Seção Frete Grátis //////////////////////////////////////////////////*/

.frete-gratis-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #DDA0DD; 
    margin-top: 5%;
}

.frete-gratis-banner {
    flex: 1;
    background-color: #DDA0DD ;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-right: 20px;
    position: relative;
}

.frete-gratis-text {
    text-align: center;
    color: #5C4033; 
}

.frete-gratis-text h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
}

.frete-gratis-text p {
    font-size: 1.5rem;
    margin: 10px 0 0 0;
}

.frete-gratis-info {
    flex: 1;
    text-align: left;
    margin-right: 125px;
}

.frete-gratis-info h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #000; /* Cor do título */
}

.frete-gratis-info p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #333; /* Cor do texto */
}

.frete-gratis-button {
    padding: 10px 20px;
    border: 2px solid #000; /* Cor da borda do botão */
    background: none;
    color: #000; /* Cor do texto do botão */
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}

.frete-gratis-button:hover {
    background: #000;
    color: #fff;
}

/* seção dos Produtos mais vendidos ///////////////////////////////////*/
.mais-vendidos-titulo {
    font-size: 20px;
    font-weight: normal;
    color: #333;
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
    padding-top: 8%
}.mais-vendidos-titulo span {
    font-weight: bold;
}

.texto-produto{
    max-width: 280px;
    text-align: left;
    font-size: 13px;
    flex: 1; 
    margin-bottom: 10px;
}

.texto-produto span {
    font-weight: bold;
}

.secao-mais-vendidos {
    position: relative;
    max-width: 80%;
    margin: 0 auto;
    overflow: hidden;
    color: #5a849f;
}

.secao-track-container {
    overflow: hidden;
    width: 100%; 
    display: flex;
}

.secao-track {
    display: flex; 
    gap: 10px; 
    transition: transform 0.5s ease;
}

.secao-slide-mais-vendidos {
    flex: 1 0 18%; 
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    max-width: 18%;
    height: 100%; 
}

.secao-slide-mais-vendidos img {
    width: 80%;
    border-radius: 10px;
    margin-bottom: 10px; 
}

.buy-button {
    background-color: #4B0082;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 30px;
    width: 100%; 
    margin-top: auto; 
    align-self: stretch; 
}

.buy-button:hover {
    background-color: #6947ff;
}

/* Seção sobre nós  /////////////////////////////////*/

/* .sobre-nos-container {
    position: relative; 
    z-index: 10; 
    background-color: #DDA0DD;
    background-color: #f0f0f0;  
    padding: 20px;
    margin-top: 100px; 
    height: 500px;
} */


/* Seção newslatter */
.newsletter-container {
    position: relative; 
    z-index: 5; 
    width: 80%; 
    margin: 0 auto; 
    background-color: #fbec5d; 
    padding: 20px; 
    border-radius: 10px;
    position: relative; 
    bottom: -55px; 
    text-align: center; 
    height: auto;
    box-sizing: border-box;
}

.newsletter-container h3 {
    font-size: 1rem;
    color: #5a849f;
    margin-bottom: 10px;
}

.newsletter-container h1 {
    font-size: 1.6rem;
    color: #5a849f;
    margin-bottom: 10px;
}

.newsletter-container p {
    font-size: 1.1rem;
    color: #5C4033;
    margin-bottom: 10px;
}

.newsletter-container form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.newsletter-container input {
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
    flex: 1;
    max-width: 250px; 
    min-width: 150px;
}

.newsletter-container button {
    padding: 10px;
    background-color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    color: #0b3a60;
}

.newsletter-container button span {
    font-size: 1.2rem;
} 

@media (max-width: 600px) {
    .newsletter-container {
        width: 90%; 
        padding: 15px; 
    }

    .newsletter-container h1 {
        font-size: 1.25rem; 
    }

    .newsletter-container input {
        max-width: 200px; 
    }

    .newsletter-container p {
        font-size: 0.85rem;
    }
} 
</style>