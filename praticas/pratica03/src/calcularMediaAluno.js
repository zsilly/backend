function calcularMediaAluno(a1,a2,a3){
    if(a1 === undefined || a2===undefined){throw error("Sem notas")}
    if(a1 <0 || a2 < 0){throw new error("Notas negativas")}
    if(a3===undefined){return a1*0,4 + a2*0.6}
    
    return Math.max(a1*0.4 + a3*0.6, a2*0.6 + a3*0.4)
}
module.exports={calcularMediaAluno};