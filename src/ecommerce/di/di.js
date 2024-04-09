import axiosInstance from "./axios";

import buscaProdutosRepository from "../data/repository/buscaProdutosRepository";
import buscaProdutosUseCase from "../domain/usecase/buscaProdutosUseCase";
import ecommerceController from "../controller/ecommerceController";

const instance = axiosInstance;

const buscaProdutosRepositoryImpl = buscaProdutosRepository(instance)
const buscaProdutosUseCaseImpl = buscaProdutosUseCase(buscaProdutosRepositoryImpl)
const ecommerceControllerImpl = ecommerceController(buscaProdutosUseCaseImpl)

export { ecommerceControllerImpl }