import { soma, divisao, subtracao } from "./index.js";

if(soma(2, 2)===4)console.log("passou o primeiro")
    else console.log("falhou o primeiro");

if(soma(-1, 2)===1)console.log("passou o segundo")
    else console.log("falhou o segundo");

if (soma(2, 0)===2)console.log("passou o terceiro")
    else console.log("falhou o terceiro");

    function soma(a,b){
    return a+b;
}
console.log("subtração");

if(subtracao(6, 2)===4)console.log("passou o primeiro")
    else console.log("falhou o primeiro");

if(subtracao(2, 1)===1)console.log("passou o segundo")
    else console.log("falhou o segundo");

if (subtracao(2, 0)===2)console.log("passou o terceiro")
    else console.log("falhou o terceiro");

    function subtracao(a,b){
    return a-b;
}

console.log("divisao");

if(divisao(6, 2)===3)console.log("passou o primeiro")
    else console.log("falhou o primeiro");

if(divisao(2, 1)===2)console.log("passou o segundo")
    else console.log("falhou o segundo");

if (divisao(2, 2)===1)console.log("passou o terceiro")
    else console.log("falhou o terceiro");

if (divisao(1, 0)===0)console.log("NÃO FAÇA ISSO")
    else console.log("NÃO FAÇA ISSO");


    function divisao(a,b){
    return a/b;
}
