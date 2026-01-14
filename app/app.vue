<template>
  <UApp>
    <NuxtPwaManifest />
    <PwaNotification />
    <!-- <NuxtRouteAnnouncer /> -->
    <MainView />
  </UApp>
</template>

<script setup lang="ts">
import MainView from "./components/layout/MainView.vue";
import PwaNotification from "./components/PwaNotification.vue";

const { loadLocaleMessages, locale } = useI18n();

await loadLocaleMessages(locale.value);

if (import.meta.server) {
  defineOgImage({
    url: "https://cpuc.chibe.dev/og/og.png",
    width: 1200,
    height: 630,
    alt: "Calculate the cost per unit of products and compare prices effectively.",
  });
  defineOgImage({
    url: "https://cpuc.chibe.dev/og/og_square.png",
    width: 630,
    height: 630,
    alt: "Calculate the cost per unit of products and compare prices effectively.",
  });
}
</script>
