import Produto from "../../domain/model/produto";

const buscaProdutoRepository = (axios) => async () => {
    try {
        const response = await axios.get('/products');
        return response?.data?.map((produto) => new Produto(produto)) ?? [];
    } catch (error) {
        throw error;
    }
};

export default buscaProdutoRepository;