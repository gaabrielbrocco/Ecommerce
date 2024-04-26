import { toRaw } from "vue";

class Produto {
    constructor({
        _id = "",
        nome = "",
        marca = "",
        categoria = "",
        descricao = "",
        preco = 0,
        qtdEstoque = 0,

    }) {
        this._id = _id;
        this.nome = nome;
        this.marca = marca;
        this.categoria = categoria;
        this.descricao = descricao;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque;
    }

    toSave() {
        const payload = structuredClone(toRaw(this))
        return payload
    }
}

export default Produto; 