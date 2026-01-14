<template>
  <UContainer
    class="rounded-none fixed top-0 min-w-screen p-5 flex flex-row justify-between items-center gap-2 bg-transparent"
  >
    <UColorModeSwitch size="xl" color="neutral" />

    <div class="flex flex-row gap-5">
      <ULocaleSelect
        :model-value="locale"
        :locales="LOCALES"
        variant="ghost"
        size="xl"
        @update:model-value="handleLocaleChange"
      />

      <USelect
        v-model="state.appCurrency"
        variant="ghost"
        :loading="!state.appCurrency"
        :items="currencyList"
        size="xl"
        icon="fluent-emoji-flat:money-bag"
        blu
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { en, es, fr } from "@nuxt/ui/locale";
import * as CurrencyCodes from "currency-codes";
import { useGlobalState } from "~/store";

const state = useGlobalState();
const { locale, setLocale } = useI18n();

const LOCALES = [en, es, fr];
const currencyList = CurrencyCodes.codes();

function handleLocaleChange(newLocale: string) {
  setLocale(newLocale as "en" | "es" | "fr");
}
</script>
