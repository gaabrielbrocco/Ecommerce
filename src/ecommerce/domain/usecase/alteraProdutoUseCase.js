const alteraProdutoUseCase = (repository) => async (payload) => {
    try {
      return await repository(payload);
    } catch (error) {
      throw error;
    }
  };
  
  export default alteraProdutoUseCase;
  