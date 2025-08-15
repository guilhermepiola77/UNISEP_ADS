var_nome = "Guilherme";
var salario = 150.0;
var status = true;

const pessoas = [];

pessoas.push("Guilherme");
pessoas.push("Jocemar");
pessoas.push("Bruno");


var aluno = {
    Nome: "Guilherme",
    RA:"007352",
    Email: "guilhermap02@gmail.com"
}

aluno.telefone = "(46) 98817-0264"

console.log(" Nome:",);
console.log("Salário", salario);
console.log("Situação:",status);
console.log("Pessoas:",pessoas);
console.log("Total de Pessoas:",pessoas.length);
console.log("Aluno:", aluno);


for(var i = 0; i < pessoas.length; i++){
    console.log(pessoas[i]);
}

pessoas.forEach(i=>{
    console.log(i)
});