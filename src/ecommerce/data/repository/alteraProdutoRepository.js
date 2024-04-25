import Produto from "../../domain/model/produto"

const alteraProdutoRepository = (axios) => async (id, payload) => {
    try {
        const response = await axios.put(`/products/${id}`, {body: JSON.stringify(payload)});
        return response?.data?.map(
            (produto) => new Produto(produto)
        ) ?? [];
    } catch (error) {
        throw error;
    }
};

export default alteraProdutoRepository;