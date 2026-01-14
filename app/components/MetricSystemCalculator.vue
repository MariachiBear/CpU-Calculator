<template>
  <div class="flex flex-col gap-2 justify-center items-center">
    <div
      id="data"
      class="flex flex-col gap-2 justify-center items-center w-full"
    >
      <div class="flex flex-row justify-center items-end md:gap-5 w-full">
        <UInputNumber
          v-model="currentQuantity"
          class="w-full"
          size="xl"
          variant="ghost"
          :placeholder="$t('quantity')"
          :min="0"
          :increment="false"
          :decrement="false"
        />

        <USelect
          v-model="currentUnit"
          variant="none"
          class="min-w-3/10 max-w-3/10"
          :items="relativeUnitsList"
        />
      </div>

      <UInputNumber
        v-model="currentPrice"
        class="w-full"
        size="xl"
        variant="ghost"
        :placeholder="$t('price')"
        :step-snapping="false"
        :min="0"
        :increment="false"
        :decrement="false"
        :format-options="currencyFormatOptions"
      />
    </div>

    <div
      id="result"
      class="flex flex-col justify-center items-center gap-1 w-full"
    >
      <span
        class="flex flex-row justify-center items-center gap-1 w-full text-2xl md:text-4xl xl:text-3xl"
      >
        {{ $t("costPer") }}
        <USelect
          v-model="currentTargetUnit"
          variant="ghost"
          :items="targetUnits"
          size="xl"
        />
      </span>

      <UInputNumber
        v-model="pricePerUnit"
        size="xl"
        variant="subtle"
        class="w-full"
        color="neutral"
        :placeholder="$t('price')"
        readonly
        disabled
        :increment="false"
        :decrement="false"
        :format-options="currencyFormatOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as math from "mathjs";
import { useGlobalState } from "~/store";

const state = useGlobalState();

interface UnitEntry {
  unit: string;
  factor: number;
}

const METRIC_SYSTEM_UNITS = {
  Kilogram: "kg",
  Liter: "L",
} as const;

const RELATIVE_UNITS_CONFIG: Record<string, UnitEntry[]> = {
  kg: [
    { unit: "mg", factor: 1000000 },
    { unit: "g", factor: 1000 },
    { unit: "kg", factor: 1 },
  ],
  L: [
    { unit: "mL", factor: 1000 },
    { unit: "cL", factor: 100 },
    { unit: "L", factor: 1 },
  ],
};

const targetUnits = Object.values(METRIC_SYSTEM_UNITS);
const currentTargetUnit = ref<"kg" | "L">(targetUnits[0] ?? "kg");
const relativeUnitsIndex = ref<Record<string, UnitEntry[]>>(
  structuredClone(RELATIVE_UNITS_CONFIG)
);

const relativeUnitsList = computed(
  () =>
    relativeUnitsIndex.value[currentTargetUnit.value]?.map(
      (entry) => entry.unit
    ) ?? []
);

const currentUnit = ref(relativeUnitsList.value[0]);
const currentPrice = ref<number>();
const currentQuantity = ref<number>();

const currencyFormatOptions = computed<Intl.NumberFormatOptions>(() => ({
  style: "currency",
  currency: state.value.appCurrency,
  currencyDisplay: "symbol",
  currencySign: "accounting",
}));

const pricePerUnit = computed(() => {
  if (!currentPrice.value || !currentQuantity.value) return 0;

  const currentFactor = relativeUnitsIndex.value[currentTargetUnit.value]?.find(
    (entry) => entry.unit === currentUnit.value
  )?.factor;

  if (!currentFactor) return 0;

  const result = (currentPrice.value / currentQuantity.value) * currentFactor;
  return math.round(result, 2);
});

watch(currentTargetUnit, () => {
  currentUnit.value = relativeUnitsList.value[0];
});
</script>

<style scoped>
#data :deep(input) {
  font-size: clamp(3.5rem, 8.5vw, 8.5rem);

  @media (width >= 80rem) {
    font-size: 3rem;
  }
}

#data :deep(button) {
  font-size: clamp(2.5rem, 6vw, 6rem);

  @media (width >= 80rem) {
    font-size: 3rem;
  }
}

#result :deep(button) {
  font-size: clamp(1.5rem, 2.25vw, 2.25rem);

  @media (width >= 80rem) {
    font-size: 1.875rem;
  }
}

#result :deep(input) {
  text-align: center !important;
  font-size: clamp(3rem, 7vw, 7rem);

  @media (width >= 80rem) {
    font-size: 2.8rem;
  }
}
</style>
