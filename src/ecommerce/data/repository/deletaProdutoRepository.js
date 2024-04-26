const deletaProdutoRepository = (axios) => async (id) => {
    try {
        await axios.delete(`/products/${id}`);
    } catch (error) {
        throw error;
    }
};

export default deletaProdutoRepository;