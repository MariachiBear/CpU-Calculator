<template>
  <UContainer
    class="fixed bottom-0 pb-20 min-w-screen rounded-none flex flex-row justify-center items-center gap-2 text-sm"
    v-if="typeof state.useImperialSystem === 'boolean'"
  >
    <span class="flex flex-row justify-center items-center gap-2 lg:text-xl">
      <UIcon name="fluent-emoji-flat:triangular-ruler" class="text-2xl" />
      {{ $t("metricSystemLabel") }}
    </span>

    <USwitch v-model="state.useImperialSystem" size="xl" color="neutral" />

    <span class="flex flex-row justify-center items-center gap-2 lg:text-xl">
      {{ $t("imperialSystemLabel") }}
      <UIcon name="fluent-emoji-flat:eagle" class="text-2xl" />
    </span>
  </UContainer>
  <UContainer
    class="fixed bottom-0 pb-20 w-screen md:w-1/2 xl:w-4/12 rounded-none flex flex-row justify-center items-center gap-2 text-sm"
    v-else
  >
    <USkeleton class="min-w-1/12 h-5 md:h-7 rounded-full" />
    <USkeleton class="min-w-3/12 h-5 md:h-7" />
    <USkeleton class="min-w-2/12 h-5 md:h-7 rounded-full" />
    <USkeleton class="min-w-3/12 h-5 md:h-7" />
    <USkeleton class="min-w-1/12 h-5 md:h-7 rounded-full" />
  </UContainer>
</template>

<script setup lang="ts">
import { useGlobalState } from "~/store";

const state = useGlobalState();
</script>
