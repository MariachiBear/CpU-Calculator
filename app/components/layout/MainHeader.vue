<template>
    <UContainer
        class="rounded-none fixed top-0 min-w-screen p-5 flex flex-row justify-between items-center gap-2 bg-transparent">
        <ULocaleSelect :model-value="locale" :locales="locales" @update:model-value="setLocale($event)" />
        <USelect :model-value="state.appCurrency" :items="currencyList"
            @update:model-value="state.appCurrency = $event" />
        <UColorModeSelect />
    </UContainer>
</template>

<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'
import * as CurrencyCodes from 'currency-codes'
import { useGlobalState } from '~/store'

const state = useGlobalState()

const { locale, setLocale } = useI18n()
const locales = [en, es, fr]
watch(locale, (newLocale) => {
    setLocale(newLocale)
})

const currencyList = CurrencyCodes.codes()
</script>

<style scoped></style>