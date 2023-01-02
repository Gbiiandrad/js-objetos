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

cliente.enderecos.push ({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,

});

const listaApenasApartamentos = cliente.enderecos.filter (
    (enderecos) => enderecos.apartamento === true
);

console.log(listaApenasApartamentos);