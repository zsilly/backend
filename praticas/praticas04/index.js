const express=require("express");
const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ];

  const DATE_TIME_FORMAT_OPTIONS = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',};
    const now = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US', DATE_TIME_FORMAT_OPTIONS).format(now);

  const app = express();
  app.use(express.json());
  app.use((req,res,next)=>{
    console.log("Tempo:",formattedDate);
    console.log("Método HTTP:",req.method);
    console.log("URL acessado",req.url);
    next();
  });
  const router=express.Router();
  app.use('/tarefas',router);

  router.get('/',(req,res)=>{
    res.json(tarefas);
  });


  router.post('/',(req,res)=>{
    const novaTarefa={id:tarefas.length+1, ... req.body}
    tarefas.push(novaTarefa);
    res.status(201).send(novaTarefa);
  });
  router.get('/:tarefaId',(req,res)=>{
    const {tarefaIda} = tarefas=req.params;
    const tarefaEncontrada=tarefas.find(item=>item.id==tarefaIda)
    res.send(tarefaEncontrada);
  })
  router.put('/:tarefaId',(req,res)=>{
    const {tarefaIda}=req.params;
    const{nome, concluida}=req.body;
    const tarefaEncontrada=tarrefas.find
    (item=>item.id==tarefaIda);
  tarefaEncontrada.nome=nome;tarefaEncontrada.concluida=concluida;
  res.send(tarefaEncontrada)
  });
  router.delete('/:tarefaId',(req,res)=>{
    const {tarefaIda} = tarefas=req.params;
    const posicao=tarefas.findIndex(item=>item.id==tarefaIda)
    if(posicao>=0){tarefas.splice(posicao, 1)};
    res.status(204).end();
  });
  
  app.listen(3000,() =>{
    console.log("APP está fuincionando")
  });
  module.exports=app;



  
  