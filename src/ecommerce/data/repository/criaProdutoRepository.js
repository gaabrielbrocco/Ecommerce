const criaProdutoRepository = (axios) => async (payload) => {
    try {
        const response = await axios.post("/products", payload);
        return response?.data ?? {}
    } catch (error) {
        throw error;
    }
};

export default criaProdutoRepository;