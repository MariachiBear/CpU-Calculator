import { createGlobalState, useStorage } from "@vueuse/core";

export const useGlobalState = createGlobalState(() =>
  useStorage("config", {
    appCurrency: "EUR",
    useImperialSystem: false,
  })
);
