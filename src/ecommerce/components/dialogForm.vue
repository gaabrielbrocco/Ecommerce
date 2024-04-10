<template>
  <v-form readonly>
    <v-dialog v-model="controller.dialogForm.value" max-width="800px">
      <v-card>
        <div class="bg-primary">
          <v-card-title>
            <span class="text-h5">Informações do Produto</span>
          </v-card-title>
        </div>

        <v-card-text>
          <v-container>
            <v-row dense>
              <v-col cols="2">
                <v-text-field
                  v-model="controller.modelProduto.value.id"
                  color="primary"
                  label="Código"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="controller.modelProduto.value.title"
                  color="primary"
                  label="Nome"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="controller.modelProduto.value.description"
                  color="primary"
                  label="Descrição"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.price"
                  color="primary"
                  label="Valor"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.brand"
                  color="primary"
                  label="Marca"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="controller.modelProduto.value.category"
                  color="primary"
                  label="Categoria"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelProduto.value.rating"
                  color="primary"
                  label="Avaliação média"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelProduto.value.stock"
                  color="primary"
                  label="Quantidade em estoque"
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
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            size="large"
            variant="text"
            @click="controller.dialogForm.value = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
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
