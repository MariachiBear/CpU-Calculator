<template>
  <UApp>
        <NuxtPwaManifest />
    <NuxtRouteAnnouncer />
    <MainView />
  </UApp>
</template>

<script setup lang="ts">
import MainView from './components/layout/MainView.vue';
import * as math from 'mathjs';

const { loadLocaleMessages, locale } = useI18n()

await loadLocaleMessages(locale.value)

tryOnMounted(() => {
  const lb = math.unit(3, 'lb').toNumber('lb')
  const oz = math.unit(1, 'oz').toNumber('lb')

  const sum = math.add(lb, oz)
  console.log(`3 lb + 1 oz = ${sum} lb`)

});

</script>