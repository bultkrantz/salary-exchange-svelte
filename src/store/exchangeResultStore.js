import { writable } from 'svelte/store';
import calculateSalaryExhange from "../utils/calculateSalaryExchange";

const exchangeResult = [{
    startAmount: 0,
    monthlySaving: 0,
    avarageYield: 0,
    timeHorizon: 10
}];

// JOHAN: Jag vet inte riktigt vad den här ska göra, men den ser ju praktiskt taget 
// identisk ut med chartFormStore, det här kanske är ett tillfälle då du vill 
// använda: https://svelte.dev/docs#derived

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