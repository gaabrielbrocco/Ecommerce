class Ecommerce {
    constructor({
        nome = "",
        marca = "",
        categoria = "",
        descricao = "",
        preco = 0,
        qtdEstoque = 0,

    }) {
        this.nome = nome;
        this.marca = marca;
        this.categoria = categoria;
        this.descricao = descricao;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque;
    }
}

export default Ecommerce; 