
const { calcularMediaAluno } = require('../src/calcularMediaAluno');

it("Quando não informar nota", ()=>{
    expect(calcularMediaAluno).toThrow()
    expect(()=>calcularMediaAluno(undefined,undefined,undefined))
    expect(()=>calcularMediaAluno(undefined,5,undefined))
    expect(()=>calcularMediaAluno(2,undefined,undefined))
})
it("Quando haver uma nota negativa",()=>{
  expect(calcularMediaAluno).toThrow()
  expect(()=>calcularMediaAluno(-1,-6,0))
  expect(()=>calcularMediaAluno(-4,-7,0))
  expect(()=>calcularMediaAluno(-5,-1,0))
})
it("Quando A3 não informada",()=>{
    expect(calcularMediaAluno(3,7,0))
    expect(calcularMediaAluno(6,6,0))
    expect(calcularMediaAluno(5,3,0))
})
it("Quando A3 negativa",()=>{
    expect(calcularMediaAluno).toThrow()
    expect(()=>calcularMediaAluno(1,1,-1))
    expect(()=>calcularMediaAluno(5,7,-5))
    expect(()=>calcularMediaAluno(6,4,-2))
})
it("Quando A1+A3 for melhor que A1+A2",()=>{
    expect(calcularMediaAluno(3,2,8)).toBeCloseTo(6)
    expect(calcularMediaAluno(5,2,9)).toBeCloseTo(7.4)
})
it("Quando A2+A3 for melhor que A2+A1",()=>{
    expect(calcularMediaAluno(1,5,8)).toBeCloseTo(6.2)
    
})




