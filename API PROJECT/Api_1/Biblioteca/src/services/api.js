import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api-url.com', // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exemplo de requisição GET para obter dados
export const fetchBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    throw error;
  }
};

// Exemplo de requisição POST para adicionar um novo livro
export const addBook = async (bookData) => {
  try {
    const response = await api.post('/books', bookData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar livro:', error);
    throw error;
  }
};
