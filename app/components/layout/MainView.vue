<template>
  <UMain
    class="p-5 md:p-10 flex flex-col justify-center items-center min-h-screen"
  >
    <MainHeader />
    <ItemCalculator />
    <SystemSelector />
  </UMain>
</template>

<script setup lang="ts">
import MainHeader from "./MainHeader.vue";
import SystemSelector from "./SystemSelector.vue";
</script>

<style scoped></style>
