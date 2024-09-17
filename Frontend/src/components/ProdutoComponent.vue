<template>
  <div class="produto">
    <h2 class="produto-nome">Produto: {{ nome }}</h2>
    <div class="produto-codigo">Código: {{ codigo }}</div>
    <div class="produto-preco">Preço: {{ preco }}</div>
    <div class="produto-descricao">Descrição: {{ descricao }}</div>
    <div class="produto-categoria">Categoria: {{ categoria }}</div>
    <div class="produto-estoque">Estoque: {{ estoque }} unidades</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProdutoComponent',
  props: {
    nome: String,
    codigo: String,
    preco: String,
    descricao: String,
    categoria: String,
    estoque: Number
  }
});
</script>

<style scoped>
.produto {
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.produto-nome {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.produto-codigo, 
.produto-preco, 
.produto-descricao, 
.produto-categoria, 
.produto-estoque {
  margin-bottom: 10px;
}
</style>
