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
        <v-col cols="5">
          <v-app-bar-title class="px-5 text-h5"> Produtos </v-app-bar-title>
        </v-col>
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
            v-model="controller.search.value"
          ></v-text-field>
          <v-btn
            density="large"
            variant="text"
            prepend-icon="mdi-plus"
            color="primary"
            @click="controller.incluir()"
          >
            Incluir
          </v-btn>
          <v-btn
            density="large"
            variant="text"
            prepend-icon="mdi-refresh"
            color="warning"
            @click="controller.paginando"
          >
            Atualizar
          </v-btn>
        </v-row>
        <v-data-table
          density="compact"
          fixed-header
          height="75dvh"
          hover
          :headers="controller.colunasTabela.value"
          :items="controller.produtos.value"
          :search="controller.search.value"
          :loading="controller.carregando.value"
        >
          <template v-slot:item.actions="{ item }">
            <div class="d-flex">
              <v-btn
                @click="controller.alterar(item, true)"
                icon="mdi-eye"
                size="x-small"
                color="green"
                class="ma-1"
              ></v-btn>
              <v-btn
                @click="controller.alterar(item)"
                icon="mdi-pencil"
                size="x-small"
                color="primary"
                class="ma-1"
              >
              </v-btn>
              <v-btn
                @click="controller.deletar(item)"
                icon="mdi-trash-can-outline"
                size="x-small"
                color="red"
                class="ma-1"
              >
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
