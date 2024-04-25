<template>
  <v-dialog v-model="controller.dialogForm.value" max-width="800px">
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
              <v-col cols="2">
                <v-text-field
                  v-model="controller.modelProduto.value._id"
                  disabled
                  color="primary"
                  label="Código"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="controller.modelProduto.value.nome"
                  color="primary"
                  label="Nome"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="controller.modelProduto.value.descricao"
                  color="primary"
                  label="Descrição"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.preco"
                  color="primary"
                  label="Valor"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.marca"
                  color="primary"
                  label="Marca"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.categoria"
                  color="primary"
                  label="Categoria"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelProduto.value.qtdEstoque"
                  color="primary"
                  label="Avaliação média"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-img
                  :src="controller.modelProduto.value.images[0]"
                  v-model="controller.modelProduto.value.images"
                  height="200px"
                ></v-img>
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
          @click="controller.dialogForm.value = false"
          prepend-icon="mdi-check"
          :loading="controller.carregando.value"
          :disabled="controller.carregando.value || controller.apenasLeitura.value"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
