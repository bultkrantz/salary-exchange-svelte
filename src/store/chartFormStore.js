import { writable } from 'svelte/store';

const chartFormValues = {
    startAmount: 0,
    monthlySaving: 0,
    avarageYield: 0,
    timeHorizon: 0,
};

const { subscribe, set, update } = writable({ ...chartFormValues });

export default {
    subscribe,
    set,
    reset: () => console.log(chartFormValues) || set({ ...chartFormValues }),
    showExample: () => set({
        startAmount: 1000,
        monthlySaving: 500,
        avarageYield: 5,
        timeHorizon: 10,
    }),
}