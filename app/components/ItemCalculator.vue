<template>
    <ImperialSystemCalculator v-if="state.useImperialSystem" />
    <MetricSystemCalculator v-else/>
</template>

<script setup lang="ts">
import { useGlobalState } from '~/store';

const state = useGlobalState()
</script>

<style scoped></style>