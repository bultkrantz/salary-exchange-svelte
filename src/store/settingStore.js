import { writable } from 'svelte/store';

const settingValues = {
    showGraph: true,
    showDataTable: true,
};

const { subscribe, set, update } = writable(settingValues);

export default {
    subscribe,
    set,
    update
}