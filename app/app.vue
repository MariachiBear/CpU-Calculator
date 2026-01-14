<template>
  <UApp>
    <NuxtPwaManifest />
    <PwaNotification />
    <MainView class="select-none" />
  </UApp>
</template>

<script setup lang="ts">
import MainView from "./components/layout/MainView.vue";
import PwaNotification from "./components/PwaNotification.vue";
import { useGlobalState } from "./store";

const { loadLocaleMessages, locale } = useI18n();

await loadLocaleMessages(locale.value);

const state = useGlobalState();

const { start } = useTimeoutFn(() => {
  if (state.value.appCurrency.length === 0) {
    state.value.appCurrency = "EUR";
  }

  if (state.value.useImperialSystem === null) {
    state.value.useImperialSystem = false;
  }
}, 1000);

start();
</script>
