<template>
  <v-layout>
    <v-navigation-drawer color="primary" theme="dark" expand-on-hover rail>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Dashboard"
          value="dashboard"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-supervisor-circle"
          title="Supervisores"
          value="supervisores"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-chart-line"
          title="Relatórios"
          value="relatórios"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-note-edit-outline"
          title="Metas"
          value="metas"
        ></v-list-item>
        <v-list-item
          active="true"
          prepend-icon="mdi-cart-outline"
          title="Produtos"
          value="produtos"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar color="gray" theme="dark" permanent>
        <v-app-bar-title class="px-5 text-h5"> Produtos </v-app-bar-title>
      </v-app-bar>

      <v-card class="my-5">
        <v-row class="d-flex mt-3 mb-5 ml-5 align-left justify-left">
          <v-text-field
            style="max-width: 200px"
            label="Buscar"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            hide-details
            single-line
            variant="solo-filled"
          ></v-text-field>
          <v-btn
            density="comfortable"
            variant="text"
            prepend-icon="mdi-plus"
            color="primary"
          >
            Incluir
          </v-btn>
          <v-btn
            density="comfortable"
            variant="text"
            prepend-icon="mdi-filter"
            color="primary"
          >
            Filtro
          </v-btn>
          <v-btn
            density="comfortable"
            variant="text"
            prepend-icon="mdi-reload"
            color="green"
          >
            Atualizar
          </v-btn>
        </v-row>
        <v-data-table
          density="compact"
          fixed-header
          height="75dvh"
          :headers="controller.colunasTabela.value"
          :items="controller.produtos.value"
        >
          <template v-slot:item.actions="{ item }">
            <div class="d-flex">
              <v-btn @click="controller.visualizar(item)" icon="mdi-eye" density="compact" color="green" class="ma-1"></v-btn>
              <v-btn @click="controller.alterar(item)" icon="mdi-pencil" density="compact" color="primary" class="ma-1"> </v-btn>
              <v-btn @click="controller.deletar(item)" icon="mdi-trash-can-outline" density="compact" color="red" class="ma-1">
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script setup>

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
