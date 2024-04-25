const deletaProdutoRepository = (axios) => async (id) => {
    try {
        const response = await axios.delete(`/products/${id}`);
        return response?.data ?? [];
    } catch (error) {
        throw error;
    }
};

export default deletaProdutoRepository;