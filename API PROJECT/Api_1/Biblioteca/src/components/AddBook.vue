<template>
    <div>
      <h2>Adicionar Livro</h2>
      <form @submit.prevent="handleSubmit">
        <input v-model="title" placeholder="Título do livro" required />
        <input v-model="author" placeholder="Autor do livro" required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { addBook } from '../services/api';
  
  export default {
    data() {
      return {
        title: '',
        author: '',
      };
    },
    methods: {
      async handleSubmit() {
        const bookData = {
          title: this.title,
          author: this.author,
        };
        try {
          await addBook(bookData);
          alert('Livro adicionado com sucesso!');
          this.title = '';
          this.author = '';
        } catch (error) {
          console.error('Erro ao adicionar livro:', error);
        }
      },
    },
  };
  </script>
  