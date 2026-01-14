<template>
  <div class="flex flex-col gap-2 justify-center items-center">
    <div
      id="data"
      class="flex flex-col gap-2 justify-center items-center w-full"
    >
      <UInputNumber
        v-for="item in relativeUnitsList"
        :key="item.name"
        v-model="item.quantity"
        class="w-full"
        size="xl"
        variant="ghost"
        :placeholder="`${$t('quantity')} ${item.unit}`"
        :min="0"
        :increment="false"
        :decrement="false"
        :step="0.0001"
        :format-options="{
          style: 'unit',
          unit: item.name,
          unitDisplay: 'short',
        }"
      />

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
  quantity: number | null;
  name: string;
}

const METRIC_SYSTEM_UNITS = {
  Pound: "lb",
  Ounce: "oz",
  Gallon: "gal",
  FluidOunce: "floz",
} as const;

const RELATIVE_UNITS_CONFIG: Record<string, UnitEntry[]> = {
  lb: [
    { unit: "lb", quantity: null, name: "pound" },
    { unit: "oz", quantity: null, name: "ounce" },
  ],
  oz: [
    { unit: "lb", quantity: null, name: "pound" },
    { unit: "oz", quantity: null, name: "ounce" },
  ],
  gal: [
    { unit: "gal", quantity: null, name: "gallon" },
    { unit: "floz", quantity: null, name: "fluid-ounce" },
  ],
  floz: [
    { unit: "gal", quantity: null, name: "gallon" },
    { unit: "floz", quantity: null, name: "fluid-ounce" },
  ],
};

const targetUnits = Object.values(METRIC_SYSTEM_UNITS);
const currentTargetUnit = ref<"lb" | "oz" | "gal" | "floz">(
  targetUnits[0] ?? "lb"
);
const relativeUnitsIndex = ref<Record<string, UnitEntry[]>>(
  structuredClone(RELATIVE_UNITS_CONFIG)
);

const relativeUnitsList = computed(
  () => relativeUnitsIndex.value[currentTargetUnit.value] ?? []
);

const currentPrice = ref<number>();

const currencyFormatOptions = computed<Intl.NumberFormatOptions>(() => ({
  style: "currency",
  currency: state.value.appCurrency,
  currencyDisplay: "symbol",
  currencySign: "accounting",
}));

const pricePerUnit = computed(() => {
  if (!currentPrice.value) return 0;

  const targetUnitSum = relativeUnitsList.value.reduce((acc, item) => {
    const quantity = item.quantity ?? 0;
    if (quantity === 0) return acc;

    const inTargetUnit = math
      .unit(quantity, item.unit)
      .toNumber(currentTargetUnit.value);

    return acc + inTargetUnit;
  }, 0);

  return targetUnitSum > 0 ? currentPrice.value / targetUnitSum : 0;
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
