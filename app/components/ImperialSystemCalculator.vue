<template>
    <div class="flex flex-col gap-2 justify-center items-center">
        <div id="data" class="flex flex-col gap-2 justify-center items-center w-full">
            <div v-for="item in relativeUnitsList" :key="item.name"
                class="flex flex-row justify-center items-end md:gap-5 w-full">
                <UInputNumber v-model="item.quantity" class="w-full" size="xl" variant="ghost"
                    :placeholder="$t('quantity') + ' ' + item.unit" :min="0" :increment="false"
                    :decrement="false" :step="0.0001" :format-options="{
                        style: 'unit',
                        unit: item.name,
                        unitDisplay: 'short',
                    }" />
            </div>
            <div class="flex flex-row justify-center items-center w-full">
                <UInputNumber v-model="currentPrice" class="w-full" size="xl" variant="ghost" :placeholder="$t('price')"
                    :step-snapping="false" :min="0" :increment="false" :decrement="false" :format-options="{
                        style: 'currency',
                        currency: state.appCurrency,
                        currencyDisplay: 'symbol',
                        currencySign: 'accounting',
                    }" />
            </div>
        </div>

        <div id="result" class="flex flex-col justify-center items-center gap-1 w-full">
            <span class="flex flex-row justify-center items-center gap-1 w-full text-2xl md:text-4xl xl:text-3xl">
                {{ $t('costPer') }}
                <USelect v-model="currentTargetUnit" variant="ghost" :items="targetUnits" size="xl" />
            </span>
            <div class="flex flex-row justify-center items-center gap-1 w-full">
                <UInputNumber v-model="pricePerUnit" size="xl" variant="subtle" class="w-full" color="neutral"
                    :placeholder="$t('price')" readonly disabled :increment="false" :decrement="false" :format-options="{
                        style: 'currency',
                        currency: state.appCurrency,
                        currencyDisplay: 'symbol',
                        currencySign: 'accounting',
                    }" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as math from 'mathjs';
import { useGlobalState } from '~/store';

const state = useGlobalState()
// defineProps<{
//     targetUnit: {
//         type: StringConstructor;
//         required: true;
//     };
// }>();
interface UnitEntry {
    unit: string;
    quantity: number | null;
    name: string;
}

const metricSystemUnits = {
    Pound: 'lb',
    Ounce: 'oz',
    Gallon: 'gal',
    FluidOunce: 'floz',
};
const targetUnits = ref<string[]>(Object.values(metricSystemUnits));
const currentTargetUnit = ref<string>(targetUnits.value[0] || 'kg');

const relativeUnitsIndex = ref<Record<string, UnitEntry[]>>({
    lb: [{ unit: 'lb', quantity: null, name: "pound" }, { unit: 'oz', quantity: null, name: "ounce" }],
    oz: [{ unit: 'lb', quantity: null, name: "pound" }, { unit: 'oz', quantity: null, name: "ounce" }],
    gal: [{ unit: 'gal', quantity: null, name: "gallon" }, { unit: 'floz', quantity: null, name: "fluid-ounce" }],
    'floz': [{ unit: 'gal', quantity: null, name: "gallon" }, { unit: 'floz', quantity: null, name: "fluid-ounce" }],
});


const relativeUnitsList = computed(() => {
    return relativeUnitsIndex.value[currentTargetUnit.value] ?? [];
});

watch(currentTargetUnit, () => {
    currentUnit.value = relativeUnitsList.value[0];
});

const currentUnit = ref(relativeUnitsList.value[0]);
const currentPrice = ref();
const pricePerUnit = computed(() => {
    if (currentPrice.value) {

        const targetUnitSum = (relativeUnitsIndex.value[currentTargetUnit.value] ?? []).reduce((acc, item) => {
            const quantity = item.quantity ?? 0;
            const inTargetUnit = math.unit(quantity, item.unit).toNumber(currentTargetUnit.value);

            return acc + inTargetUnit;
        }, 0);

        return currentPrice.value / targetUnitSum;
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