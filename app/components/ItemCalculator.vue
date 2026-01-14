<template>
  <UContainer class="p-0 min-w-full xl:min-w-1/2 xl:max-w-1/2">
    <ImperialSystemCalculator v-if="state.useImperialSystem" />
    <MetricSystemCalculator v-else />
  </UContainer>
</template>

<script setup lang="ts">
import { useGlobalState } from "~/store";

const state = useGlobalState();
</script>

<style scoped></style>
