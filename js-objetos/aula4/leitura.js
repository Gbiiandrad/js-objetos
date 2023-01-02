// criando uma  interação com o arquivo formato "json"

const dados = require("./cliente.json"); // o require é uma função que nos permite puxar arquivos 

console.log(dados);
console.log(typeof dados);

//transformar io arquio JSON em String
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

////transformar io arquio JSON em objetos novamente
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);