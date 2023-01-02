const clientes = require("./clientes.json");

function filtrarApartamentosSemComplementos(clientes) {
    return clientes.filter( (clientes) => {
        return (clientes.endereco.apartamento 
                && !clientes.endereco.hasOwnProperty("complemento") // para mostrar as pessoas q NÃO tem o complemento, ou seja, o " ! " vai mostrar ao contrario do pedido.
                );
    } );
}

const filtrados = filtrarApartamentosSemComplementos(clientes);

console.log(filtrados);