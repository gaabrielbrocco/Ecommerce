const alteraProdutoRepository = (axios) => async (payload) => {
    try {
        const response = await axios.patch(`/products/${payload._id}`, payload);
        return response?.data ?? {}
    } catch (error) {
        throw error;
    }
};

export default alteraProdutoRepository;