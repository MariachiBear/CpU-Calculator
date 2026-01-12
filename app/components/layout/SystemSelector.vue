<template>
    <UContainer class="fixed bottom-0 p-20 min-w-screen rounded-none flex flex-row justify-center items-center gap-2 mt-5 text-sm">
        <span>📐 Metric System</span>
        <USwitch v-model="useImperialSystem" size="xl" color="neutral" />
        <span> "Freedom" Units 🦅</span>
    </UContainer>
</template>

<script setup lang="ts">
import { useGlobalState } from '~/store';

const state = useGlobalState()
const useImperialSystem = ref(state.value.useImperialSystem);

watch(useImperialSystem, (newValue) => {
    state.value.useImperialSystem = newValue;
});
</script>

<style scoped></style>