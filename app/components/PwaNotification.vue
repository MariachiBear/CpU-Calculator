<script setup lang="ts">
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();

const toast = useToast();

tryOnMounted(() => {
  if ($pwa?.needRefresh) {
    showToast();
  }
});

function showToast() {
  toast.add({
    title: $t("pwaUpdateAvailableTitle"),
    description: $t("pwaUpdateAvailableDescription"),
    type: "foreground",
    close: {
      size: "xl",
      icon: "mdi:close-circle-outline",
    },
    icon: "mdi:star-shooting-outline",
    duration: 30000,
    color: "info",
    ui: {
      actions: "justify-center",
      description: "text-justify lg:text-bold",
    },
    actions: [
      {
        icon: "mdi-refresh",
        label: $t("pwaUpdateButtonLabel"),
        color: "neutral",
        variant: "soft",
        size: "xl",
        onClick: () => {
          $pwa?.updateServiceWorker();
        },
      },
    ],
  });
}
</script>
