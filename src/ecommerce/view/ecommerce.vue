<template>
    <tabela-produtos :controller="controller"/>
    <dialog-form :controller="controller" />
  </template>
  
  <script setup>
  import { ecommerceControllerImpl } from "../di/di";
  import TabelaProdutos from "../components/tabela-produtos.vue";
  import dialogForm from "../components/dialogForm.vue"
  
  const controller = ecommerceControllerImpl();
  </script>
  
  <style>
  
  </style>