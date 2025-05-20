const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir HTML estático
app.use(express.static(path.join(__dirname, 'public')));

// API proxy para obtener todos los álbumes
app.get('/api/albums', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await response.json();
  res.json(data);
});

// API proxy para obtener álbum por ID
app.get('/api/albums/:id', async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  if (!response.ok) return res.status(404).json({ error: 'Álbum no encontrado' });
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
