const supertest=require('supertest');
const app=require('../app');
const request=supertest(app);
describe('Testes da API Tarefas', ()=> {
    let id;
    test('GET /tarefas deve retornar 200',async()=>{
        const response = await request.get('/tarefas');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(Array.isArray(response.body)).toBeTruthy(); // toBe(true) == to BeTruthy()

    });
    test('POST /tarefas deve retornar 201',async()=>{
        const dados={nome: "Estudar para P1",}
        const response=await request.post('/tare').
        send(dados);
        expect(reponse.status).toBe(201);
        expect(reponse.headers["content-type"]).toMatch(/json/);
        id=parseInt(reponse.body.id);
        expect(reponse.body.id).toBeDefined();
        expect(reponse.body.nome).toBe(dados.nome);
        expect(reponse.body.concluida).toBe(false);
    });
    test('GET /tarefas/id deve retornar 200',async()=>{
        const reponse = await request.get(`/tarefas/${id}`);
    })


});