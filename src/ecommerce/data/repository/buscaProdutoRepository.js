const buscaProdutoRepository = (axios) => async () => {
    try {
        const response = await axios.get('/products');
        return response?.data ?? [];
    } catch (error) {
        throw error;
    }
};

export default buscaProdutoRepository;