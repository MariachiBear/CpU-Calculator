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
      <div class="flex flex-row justify-center items-center w-full">
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
          :format-options="{
            style: 'currency',
            currency: state.appCurrency,
            currencyDisplay: 'symbol',
            currencySign: 'accounting',
            roundingMode: 'trunc',
          }"
        />
      </div>
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
      <div class="flex flex-row justify-center items-center gap-1 w-full">
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
          :format-options="{
            style: 'currency',
            currency: state.appCurrency,
            currencyDisplay: 'symbol',
            currencySign: 'accounting',
          }"
        />
      </div>
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

const metricSystemUnits = {
  Kilogram: "kg",
  Liter: "L",
};
const targetUnits = ref<string[]>(Object.values(metricSystemUnits));
const currentTargetUnit = ref<string>(targetUnits.value[0] || "kg");

const relativeUnitsIndex = ref<Record<string, UnitEntry[]>>({
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
});

const relativeUnitsList = computed(() => {
  return (
    relativeUnitsIndex.value[currentTargetUnit.value]?.map(
      (entry: UnitEntry) => entry.unit
    ) ?? []
  );
});

watch(currentTargetUnit, () => {
  currentUnit.value = relativeUnitsList.value[0];
});

const currentUnit = ref(relativeUnitsList.value[0]);
const currentPrice = ref();
const currentQuantity = ref();
const pricePerUnit = computed(() => {
  const currentPriceValue = currentPrice.value;
  const currentQuantityValue = currentQuantity.value;

  if (currentPriceValue && currentQuantityValue) {
    const currentFactor = relativeUnitsIndex.value[
      currentTargetUnit.value
    ]?.find((entry: UnitEntry) => entry.unit === currentUnit.value)?.factor;

    const result = math.evaluate(
      "(currentPrice / currentQuantity) * currentFactor",
      {
        currentPrice: currentPrice.value,
        currentQuantity: currentQuantity.value,
        currentFactor: currentFactor,
      }
    );

    console.log(currentPrice.value);

    return math.round(result, 2);
  }

  return 0;
});
</script>

<style scoped>
#data :deep(:is(input)) {
  @media (width < 48rem) {
    font-size: 3.5rem;
  }

  @media (width >=48rem) and (width < 80rem) {
    font-size: 8.5rem;
  }

  @media (width >=80rem) {
    font-size: 3rem;
  }
}

#data :deep(:is(button)) {
  @media (width < 48rem) {
    font-size: 2.5rem;
  }

  @media (width >=48rem) and (width < 80rem) {
    font-size: 6rem;
  }

  @media (width >=80rem) {
    font-size: 3rem;
  }
}

#result :deep(:is(button)) {
  @media (width < 48rem) {
    font-size: 1.5rem;
  }

  @media (width >=48rem) and (width < 80rem) {
    font-size: 2.25rem;
  }

  @media (width >=80rem) {
    font-size: 1.875rem;
  }
}

#result :deep(:is(input)) {
  text-align: center !important;

  @media (width < 64rem) {
    font-size: 3rem;
  }

  @media (width >=48rem) and (width < 80rem) {
    font-size: 7rem;
  }

  @media (width >=80rem) {
    font-size: 2.8rem;
  }
}
</style>
