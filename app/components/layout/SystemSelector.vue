<template>
    <UContainer class="fixed bottom-0 pb-20 min-w-screen rounded-none flex flex-row justify-center items-center gap-2 text-sm">
        <span>📐 Metric System</span>
        <USwitch v-model="state.useImperialSystem" size="xl" color="neutral" />
        <span> "Freedom" Units 🦅</span>
    </UContainer>
</template>

<script setup lang="ts">
import { useGlobalState } from '~/store';

const state = useGlobalState()
</script>

<style scoped></style>