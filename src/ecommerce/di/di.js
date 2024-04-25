import axiosInstance from "./axios";

import buscaProdutoRepository from "../data/repository/buscaProdutoRepository";
import alteraProdutoRepository from "../data/repository/alteraProdutoRepository";
import criaProdutoRepository from "../data/repository/criaProdutoRepository";
import deletaProdutoRepository from "../data/repository/deletaProdutoRepository";

import buscaProdutoUseCase from "../domain/usecase/buscaProdutoUseCase";
import ecommerceController from "../controller/ecommerceController";
import alteraProdutoUseCase from "../domain/usecase/alteraProdutoUseCase";
import criaProdutoUseCase from "../domain/usecase/criaProdutoUseCase";
import deletaProdutoUseCase from "../domain/usecase/deletaProdutoUseCase";


const instance = axiosInstance;

const buscaProdutoRepositoryImpl = buscaProdutoRepository(instance)
const alteraProdutoRepositoryImpl = alteraProdutoRepository(instance)
const criaProdutoRepositoryImpl = criaProdutoRepository(instance)
const deletaProdutoRepositoryImpl = deletaProdutoRepository(instance)

const buscaProdutoUseCaseImpl = buscaProdutoUseCase(buscaProdutoRepositoryImpl)
const alteraProdutoUseCaseImpl = alteraProdutoUseCase(alteraProdutoRepositoryImpl)
const criaProdutoUseCaseImpl = criaProdutoUseCase(criaProdutoRepositoryImpl)
const deletaProdutoUseCaseImpl = deletaProdutoUseCase(deletaProdutoRepositoryImpl)

const ecommerceControllerImpl = ecommerceController(buscaProdutoUseCaseImpl, alteraProdutoUseCaseImpl, criaProdutoUseCaseImpl, deletaProdutoUseCaseImpl)


export { ecommerceControllerImpl }