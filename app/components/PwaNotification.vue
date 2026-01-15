<template></template>

<script setup lang="ts">
import { useGlobalState } from "~/store";

const { $pwa } = useNuxtApp();
const toast = useToast();
const { t } = useI18n();
const state = useGlobalState();

function showInstallToast() {
  toast.add({
    type: "foreground",
    duration: 20000,
    color: "neutral",
    close: {
      size: "xl",
      icon: "mdi:close-circle-outline",
    },
    icon: "mdi:devices",
    ui: {
      actions: "justify-center",
      description: "text-justify lg:text-bold",
    },
    title: t("pwaInstallTitle"),
    description: t("pwaInstalDescription"),
    actions: [
      {
        icon: "mdi:cellphone-arrow-down",
        label: t("pwaInstallButtonLabel"),
        color: "neutral",
        variant: "soft",
        size: "xl",
        onClick: () => installApp(),
      },
    ],
  });
}

const installApp = async () => {
  await $pwa?.install().then((response) => console.log(response));
  state.value.wasInstallPromptShowed = true;
};

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
  if (!state.value.wasInstallPromptShowed && $pwa?.showInstallPrompt) {
    showInstallToast();
  }

  if ($pwa?.offlineReady && $pwa.isPWAInstalled) {
    showOfflineReadyToast();
  }

  if ($pwa?.needRefresh) {
    showUpdateToast();
  }
});
</script>
