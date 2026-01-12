<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <MainView />
    <!-- <NuxtWelcome /> -->
  </UApp>
</template>

<script setup lang="ts">
import MainView from './components/layout/MainView.vue';

const { loadLocaleMessages, locale } = useI18n()

await loadLocaleMessages(locale.value)

</script>