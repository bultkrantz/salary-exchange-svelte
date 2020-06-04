import { writable } from 'svelte/store';
import calculateSalaryExhange from "../utils/calculateSalaryExchange";

const exchangeResult = [{
    startAmount: 0,
    monthlySaving: 0,
    avarageYield: 0,
    timeHorizon: 10
}];

const { subscribe, set, update } = writable(exchangeResult);

const updateExchangeResult = (chartFormValues) => update(() => {
    console.log(chartFormValues);
    const result = calculateSalaryExhange({
        startAmount: chartFormValues.startAmount,
        monthlySaving: chartFormValues.monthlySaving,
        avarageYield: chartFormValues.avarageYield,
        timeHorizon: chartFormValues.timeHorizon
    });
    return result;
});

const reset = () => {
    set(exchangeResult);
};

export default {
    subscribe,
    updateExchangeResult,
    reset
}