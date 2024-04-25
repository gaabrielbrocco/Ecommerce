import Produto from "../../domain/model/produto"

const criaProdutoRepository = (axios) => async (payload) => {
    try {
        const response = await axios.post("/products/add", {body: JSON.stringify(payload)});
        return response?.data?.map(
            (produto) => new Produto(produto)
        ) ?? [];
    } catch (error) {
        throw error;
    }
};

export default criaProdutoRepository;