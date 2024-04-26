<template>
  <v-dialog v-model="controller.dialogForm.value" max-width="800px" persistent>
    <v-card>
      <div class="bg-primary">
        <v-card-title>
          <span class="text-h5">Informações do Produto</span>
        </v-card-title>
      </div>

      <v-card-text>
        <v-container>
          <v-form
            :disabled="controller.carregando.value"
            :readonly="controller.apenasLeitura.value"
          >
            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelProduto.value.nome"
                  label="Nome"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelProduto.value.marca"
                  label="Marca"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.preco"
                  label="Valor"
                  v-maska:[valor]
                  prefix="R$"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.categoria"
                  label="Categoria"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model.number="controller.modelProduto.value.qtdEstoque"
                  type="number"
                  label="Quantidade em estoque"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="controller.modelProduto.value.descricao"
                  label="Descrição"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          color="red"
          variant="outlined"
          @click="controller.dialogForm.value = false"
          prepend-icon="mdi-close"
          :disabled="controller.carregando.value"
        >
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="outlined"
          @click="controller.salvar"
          prepend-icon="mdi-check"
          :loading="controller.carregando.value"
          :disabled="
            controller.carregando.value || controller.apenasLeitura.value
          "
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const valor = {
  mask: "#.###.###,##",
  tokens: "9:[0-9]:repeated",
  reversed: true,
};

defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
