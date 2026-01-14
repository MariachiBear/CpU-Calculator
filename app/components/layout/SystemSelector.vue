<template>
  <UContainer
    class="fixed bottom-0 pb-20 min-w-screen rounded-none flex flex-row justify-center items-center gap-2 text-sm"
  >
    <span class="flex flex-row justify-center items-center gap-2">
      <span class="text-2xl">
        <UIcon name="fluent-emoji-flat:triangular-ruler" />
      </span>
      {{ $t("metricSystemLabel") }}
    </span>

    <USwitch v-model="state.useImperialSystem" size="xl" color="neutral" />

    <span class="flex flex-row justify-center items-center gap-2">
      {{ $t("imperialSystemLabel") }}
      <span class="text-2xl">
        <UIcon name="fluent-emoji-flat:eagle" />
      </span>
    </span>
  </UContainer>
</template>

<script setup lang="ts">
import { useGlobalState } from "~/store";

const state = useGlobalState();
</script>

<style scoped></style>
