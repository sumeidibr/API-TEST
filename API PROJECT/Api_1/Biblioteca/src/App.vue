<template>
  <div>
    <h1>Bem-vindo à Biblioteca</h1>
    <BooksList />
  </div>
</template>

<script>
import BooksList from './components/BooksList.vue';

export default {
  components: {
    BooksList,
  },
};
</script>

<style>
/* Estilos globais */
</style>
