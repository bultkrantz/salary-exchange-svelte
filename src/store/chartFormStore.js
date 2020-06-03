import { writable } from 'svelte/store';

const chartFormValues = {
    startAmount: 0,
    monthlySaving: 0,
    avarageYield: 0,
    timeHorizon: 10,
};

const { subscribe, set, update } = writable(chartFormValues);

const changeChartValue = chartValue => update(chartValue => {
    return [...chartForm, chartValue];
});

const reset = () => {
    set(chartFormValues);
};

export default {
    subscribe,
    set,
    changeChartValue,
    reset
}