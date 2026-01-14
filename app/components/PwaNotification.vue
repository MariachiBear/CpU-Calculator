<template></template>

<script setup lang="ts">
const { $pwa } = useNuxtApp();
const toast = useToast();
const { t } = useI18n();

function showUpdateToast() {
  toast.add({
    type: "foreground",
    duration: 30000,
    color: "info",
    close: {
      size: "xl",
      icon: "mdi:close-circle-outline",
    },
    icon: "mdi:star-shooting-outline",
    ui: {
      actions: "justify-center",
      description: "text-justify lg:text-bold",
    },
    title: t("pwaUpdateAvailableTitle"),
    description: t("pwaUpdateAvailableDescription"),
    actions: [
      {
        icon: "mdi-refresh",
        label: t("pwaUpdateButtonLabel"),
        color: "neutral",
        variant: "soft",
        size: "xl",
        onClick: () => $pwa?.updateServiceWorker(),
      },
    ],
  });
}

function showOfflineReadyToast() {
  toast.add({
    type: "background",
    duration: 5000,
    color: "success",
    close: {
      size: "xl",
      icon: "mdi:close-circle-outline",
    },
    icon: "mdi:wifi-off",
    ui: {
      actions: "justify-center",
      description: "text-justify lg:text-bold",
    },
    title: t("pwaOfflineAvailableTitle"),
    description: t("pwaOfflineAvailableDescription"),
  });
}

tryOnMounted(() => {
  if ($pwa?.offlineReady && $pwa.isPWAInstalled) {
    showOfflineReadyToast();
  }

  if ($pwa?.needRefresh) {
    showUpdateToast();
  }
});
</script>
