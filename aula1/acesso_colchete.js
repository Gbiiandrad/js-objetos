const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
}

console.log(`O nome do cliente é ${cliente ["nome"] } e sua idade é ${cliente ["idade"] } anos.`);

// console.log(`Os 3 primeiros digitos dos CPF do cliente é ${cliente.cpf.substring (0, 3) }`);

const chave = ["nome", "idade", "cpf", "email", "altura"];

chave.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente [chave] }`);
})