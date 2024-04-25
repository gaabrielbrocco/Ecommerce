const alteraProdutoUseCase = (repository) => async (id,payload) => {
    try {
      return await repository(id,payload);
    } catch (error) {
      throw error;
    }
  };
  
  export default alteraProdutoUseCase;
  