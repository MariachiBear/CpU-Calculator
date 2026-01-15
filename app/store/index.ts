import { createGlobalState, useStorage } from "@vueuse/core";

export const useGlobalState = createGlobalState(() =>
  useStorage<{
    appCurrency: string;
    useImperialSystem: boolean | null;
    wasInstallPromptShowed: boolean;
  }>("config", {
    appCurrency: "",
    useImperialSystem: null,
    wasInstallPromptShowed: false,
  })
);
