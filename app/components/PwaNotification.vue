<template></template>

<script setup lang="ts">
const { $pwa } = useNuxtApp();
const toast = useToast();
const { t } = useI18n();

const TOAST_CONFIG = {
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
} as const;

function showUpdateToast() {
  toast.add({
    ...TOAST_CONFIG,
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

tryOnMounted(() => {
  if ($pwa?.needRefresh) {
    showUpdateToast();
  }
});
</script>
