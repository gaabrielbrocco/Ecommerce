import { ref, onMounted } from "vue";
import Produto from "../domain/model/produto";
import { colunas } from "../const/colunas";

const ecommerceController = (buscaProdutosUseCase) => () => {

    const produtos = ref([]);
    const produtoSelecionado = ref(null);
    const colunasTabela = ref(colunas);
    const linhas = ref([]);

    onMounted(async () => {
        produtos.value = await buscaProdutosUseCase();

      });

    

    return {
        produtos,
        produtoSelecionado,
        colunasTabela,
        linhas,
    }
}

export default ecommerceController;