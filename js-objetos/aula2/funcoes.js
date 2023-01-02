const cliente = {
    nome: "João",
    idade: 24,
    email: "joão@firma.com",
    telefone: ["18 9977236748", "18 9966384902"],
    saldo: 200,
    
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log("Seu saldo é insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com SUCESSO!. Saldo atual: ${this.saldo}`);
        }
    }
}

cliente.efetuaPagamento(25);