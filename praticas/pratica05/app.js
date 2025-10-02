const express = require('express');
const app = express();

app.use(express.json());

// Simula um banco de dados em memória
let tarefas = [];
let idCounter = 1;

// Rotas

// GET /tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// POST /tarefas
app.post('/tarefas', (req, res) => {
  const { nome, concluida } = req.body;
  const novaTarefa = { id: idCounter++, nome, concluida };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// GET /tarefas/:id
app.get('/tarefas/:id', (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
  res.json(tarefa);
});

// PUT /tarefas/:id
app.put('/tarefas/:id', (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });

  const { nome, concluida } = req.body;
  tarefa.nome = nome !== undefined ? nome : tarefa.nome;
  tarefa.concluida = concluida !== undefined ? concluida : tarefa.concluida;

  res.json(tarefa);
});

// DELETE /tarefas/:id
app.delete('/tarefas/:id', (req, res) => {
  const index = tarefas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Tarefa não encontrada' });

  tarefas.splice(index, 1);
  res.status(204).send();
});

module.exports = app;
