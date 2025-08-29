const test = require('node:test')
const calculadora =require('../src/index.js')
test("2+2=4", ()=>{
    expect(calculadora.soma).toBefined()
    expect(calculadora.soma(2,2)).toBe(4)
})
test("2+0=2",()=>{
    expect(calculadora.soma(2,0)).toBe(2)
})
test("-2 + -2 =-4", () => {
    expect(calculadora.soma(-2,-2)).toBe(-4)
})
//sub
test("se a >= b então a- b >=0", function(){
    expect(calculadora.subtracao).toBefined()
    expect(calculadora.subtracao(1,2)).toBeGreaterThanOrEqual(0)
    expect(calculadora.subtracao(-2,-1)).toBeGreaterThanOrEqual(0)
    expect(calculadora.subtracao(-2,1)).toBeGreaterThanOrEqual(0)
    expect(calculadora.subtracao(2,-1)).toBeGreaterThanOrEqual(0)
}) 
    