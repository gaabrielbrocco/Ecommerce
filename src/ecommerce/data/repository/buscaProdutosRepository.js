const buscaProdutosRepository = (axios) => async () => {
    try {
        const response = await axios.get('/products');
        return response?.data.products ?? [];
    } catch (error) {
        throw error;
    }
};

export default buscaProdutosRepository;