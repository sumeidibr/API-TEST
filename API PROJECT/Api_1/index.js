const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

// Middleware para permitir JSON
app.use(express.json());

// Rota para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.send('API está funcionando!');
}); 
  
// Rota de exemplo para retornar uma lista de livros
const books = [
  { id: 1, title: 'O Alquimista', author: 'Paulo Coelho' },
  { id: 2, title: 'Dom Casmurro', author: 'Machado de Assis' }
];
// Listar todos os livros
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Obter um livro específico
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Livro não encontrado' });
  }
  
  res.json(book);
});

// Adicionar um novo livro
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Atualizar um livro
app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Livro não encontrado' });
  }

  // Atualiza os dados do livro
  books[bookIndex] = { id: bookId, title, author };
  res.json(books[bookIndex]);
});

// Deletar um livro
app.delete('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Livro não encontrado' });
  }

  // Remove o livro do array
  books.splice(bookIndex, 1);
  res.status(204).send(); // Retorna 204 No Content
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
