<template>
  <UApp>
    <NuxtPwaManifest />
    <PwaNotification />
    <NuxtRouteAnnouncer />
    <MainView />
  </UApp>
</template>

<script setup lang="ts">
import MainView from './components/layout/MainView.vue';
import PwaNotification from './components/PwaNotification.vue';

const { loadLocaleMessages, locale } = useI18n()

await loadLocaleMessages(locale.value)
</script>