const salvaProdutoUseCase =
  (alteraProdutoUseCase, criaProdutoUseCase) =>
  async (payload) => {
    const isEdit = !!payload._id;


    if (isEdit) {
      return await alteraProdutoUseCase(payload);
    }

    return await criaProdutoUseCase(payload.toSave());
  };

export default salvaProdutoUseCase;