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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}...`);
    console.log(`Ligando para ${telefoneResidencial}...`);
}

//Os "..." é a sintaxe de espalhamento, ele irá passar por cada um dos campos como se fosse campos diferentes.
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);