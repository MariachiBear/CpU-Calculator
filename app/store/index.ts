import { createGlobalState, useStorage } from "@vueuse/core";

export const useGlobalState = createGlobalState(() =>
  useStorage<{ appCurrency: string; useImperialSystem: boolean | null }>(
    "config",
    {
      appCurrency: "",
      useImperialSystem: null,
    }
  )
);
