<template>
    <dialog-form :controller="controller"/>
  </template>
  
  <script setup>
  import { ecommerceControllerImpl } from "../di/di";
  import DialogForm from "../components/dialog-form.vue";
  
  const controller = ecommerceControllerImpl();
  </script>
  
  <style>
  
  </style>