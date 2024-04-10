import { ref, onMounted } from "vue";
import Produto from "../domain/model/produto";
import { colunas } from "../const/colunas";
import { botoes } from "../const/botoes";

const ecommerceController = (buscaProdutosUseCase) => () => {
  const produtos = ref([]);
  const produtoSelecionado = ref(null);
  const colunasTabela = ref(colunas);
  const linhas = ref([]);
  const opcoesDeAcao = ref(botoes);
  const dialogForm = ref(true);
  const modelProduto = ref(new Produto({}));

  onMounted(async () => {
    produtos.value = await buscaProdutosUseCase();
  });

  const visualizar = async (item) => {
    modelProduto.value = { ...item };
    dialogForm.value = true;
  }

  const alterar = async (item) => {
    console.log(item);
  }

  const deletar = async (item) => {
    console.log(item);
  }

  return {
    produtos,
    produtoSelecionado,
    colunasTabela,
    linhas,
    opcoesDeAcao,
    visualizar,
    alterar,
    deletar,
    dialogForm,
    modelProduto,
  };
};

export default ecommerceController;
