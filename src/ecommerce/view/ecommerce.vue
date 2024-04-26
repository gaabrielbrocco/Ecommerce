<template>
    <tabela-produtos :controller="controller"/>
    <dialog-form :controller="controller" />
  </template>
  
  <script setup>
  import { ecommerceControllerImpl } from "../di/di";
  import TabelaProdutos from "../components/tabela-produtos.vue";
  import dialogForm from "../components/dialogForm.vue"
import { onMounted } from "vue";
  
  const controller = ecommerceControllerImpl();

  onMounted(async () => {
    await controller.paginando()
  })
  </script>
  
  <style>
  
  </style>