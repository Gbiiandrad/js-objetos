const cliente = {
    nome: "João",
    idade: 24,
    email: "joão@firma.com",
    telefone: ["18 9977236748", "18 9966384902"],
}

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

const chavesObjeto = Object.keys(cliente);

console.log(chavesObjeto);

// o ! irá fazer ao contrario do que foi pedido
if (!chavesObjeto.includes("enderecos")) {
    console.log("ERRO!. É necessário ter um endereço cadastrado. Por favor, tente novamente. ");
}