<template>
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.title }} - {{ book.author }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: [] // Inicializa a lista de livros como um array vazio
      };
    },
    mounted() {
      this.fetchBooks(); // Chama a função para buscar os livros quando o componente é montado
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await axios.get('http://localhost:3000/api/books'); // Faz a requisição à API
          console.log('Livros recebidos da API:', response.data);
          this.books = response.data; // Armazena os livros no estado do componente
        } catch (error) {
          console.error('Erro ao buscar livros:', error);
        }
      }
    }
  };
  </script>
  