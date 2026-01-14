<template>
  <UContainer class="p-0 min-w-full xl:min-w-1/2 xl:max-w-1/2">
    <ImperialSystemCalculator v-if="state.useImperialSystem === true" />
    <MetricSystemCalculator v-else-if="state.useImperialSystem === false" />
    <div
      class="flex flex-col gap-2 justify-center items-center min-w-full"
      v-else
    >
      <USkeleton class="min-w-full h-22 md:h-25 xl:h-22" />
      <USkeleton class="min-w-full h-22 md:h-25 xl:h-22" />

      <div class="flex flex-col justify-center items-center gap-1 w-full">
        <USkeleton class="min-w-1/2 xl:min-w-1/4 h-12 md:h-15 xl:h-12" />
        <USkeleton class="min-w-full h-22 md:h-25 xl:h-22" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useGlobalState } from "~/store";

const state = useGlobalState();
</script>

<style scoped></style>
