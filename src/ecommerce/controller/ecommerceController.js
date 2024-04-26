import { ref } from "vue";
import Produto from "../domain/model/produto";
import { colunas } from "../const/colunas";
import { botoes } from "../const/botoes";
import Swal from "sweetalert2";

const ecommerceController =
  (buscaProdutoUseCase, salvaProdutoUseCase, deletaProdutoUseCase) => () => {
    const produtos = ref([]);
    const produtoSelecionado = ref(null);
    const colunasTabela = ref(colunas);
    const opcoesDeAcao = ref(botoes);
    const dialogForm = ref(false);
    const modelProduto = ref(new Produto({}));
    const search = ref("");
    const apenasLeitura = ref(false);
    const carregando = ref(false);

    const paginando = async () => {
      try {
        carregando.value = true;
        produtos.value = await buscaProdutoUseCase();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Algo deu errado! ${error}`,
        });
      } finally {
        carregando.value = false;
      }
    };

    const alterar = async (item, apenasVisualizacao) => {
      try {
        carregando.value = true;
        apenasLeitura.value = apenasVisualizacao;
        modelProduto.value = { ...item };
        dialogForm.value = true;
        Swal.fire({
          title: "Produto alterado",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Algo deu errado! ${error}`,
        });
      } finally {
        carregando.value = false;
      }
    };

    const incluir = async () => {
      try {
        carregando.value = true;
        modelProduto.value = new Produto({});
        dialogForm.value = true;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Algo deu errado! ${error}`,
        });
      } finally {
        carregando.value = false;
      }
    };

    const salvar = async () => {
      try {
        carregando.value = true;
        await salvaProdutoUseCase(modelProduto.value);
        dialogForm.value = false;
        await paginando();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Algo deu errado! ${error}`,
        });
      } finally {
        carregando.value = false;
      }
    };

    const deletar = async (item) => {
      try {
        Swal.fire({
          title: "Deseja realmente excluir o produto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim",
        }).then(async (result) => {
          if (result.isConfirmed) {
            carregando.value = true;

            await deletaProdutoUseCase(item._id);

            Swal.fire({
              title: "Produto excluído",
              icon: "success",
            });
            await paginando();
            carregando.value = false;
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Algo deu errado! ${error}`,
        });
      }
    };

    return {
      produtos,
      produtoSelecionado,
      colunasTabela,
      opcoesDeAcao,
      alterar,
      deletar,
      dialogForm,
      search,
      modelProduto,
      apenasLeitura,
      carregando,
      incluir,
      paginando,
      salvar,
    };
  };

export default ecommerceController;
