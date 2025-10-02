const request = require('supertest');
const app = require('./app');

const api = request(app);
let tarefaId;

describe('Testes da API de Tarefas', () => {
  
  test('GET /tarefas deve retornar status 200 e JSON', async () => {
    const response = await api.get('/tarefas');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('POST /tarefas deve criar uma tarefa e retornar status 201 e JSON', async () => {
    const novaTarefa = { nome: "Estudar Node", concluida: false };
    const response = await api.post('/tarefas').send(novaTarefa);
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('id');
    tarefaId = response.body.id;
  });

  test('GET /tarefas/:id com id válido deve retornar status 200 e JSON', async () => {
    const response = await api.get(`/tarefas/${tarefaId}`);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('GET /tarefas/1 deve retornar status 404 e JSON', async () => {
    const response = await api.get('/tarefas/1');
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('PUT /tarefas/:id com id válido deve retornar status 200 e JSON', async () => {
    const dadosAtualizados = { nome: "Estudar Node e Express", concluida: true };
    const response = await api.put(`/tarefas/${tarefaId}`).send(dadosAtualizados);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('PUT /tarefas/1 deve retornar status 404 e JSON', async () => {
    const dadosAtualizados = { nome: "Tarefa inválida", concluida: false };
    const response = await api.put('/tarefas/1').send(dadosAtualizados);
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('DELETE /tarefas/:id com id válido deve retornar status 204 e sem conteúdo', async () => {
    const response = await api.delete(`/tarefas/${tarefaId}`);
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  test('DELETE /tarefas/1 deve retornar status 404 e JSON', async () => {
    const response = await api.delete('/tarefas/1');
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  });

});
