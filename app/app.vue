<template>
  <UApp>
    <NuxtPwaManifest />
    <PwaNotification />
    <NuxtRouteAnnouncer />
    <MainView />
  </UApp>
</template>

<script setup lang="ts">
import MainView from "./components/layout/MainView.vue";
import PwaNotification from "./components/PwaNotification.vue";

const { loadLocaleMessages, locale } = useI18n();

await loadLocaleMessages(locale.value);

defineOgImageComponent("NuxtSeo", [
  // Default landscape for Twitter/Facebook
  { title: "Cost per unit calculator" },
  // Square for WhatsApp
  {
    title: "Cost per unit calculator",
    key: "whatsapp",
    width: 800,
    height: 800,
  },
]);
</script>
