<script>
  import Chart from "../components/Chart.svelte";
  import DataTable from "../components/DataTable.svelte";
  import ChartForm from "../components/ChartForm.svelte";
  import settingValues from "../store/settingStore.js";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
</script>

<svelte:head>
  <title>Kalkylator</title>
</svelte:head>

<h1>Kalkylator</h1>
<ChartForm />

{#if $settingValues.showGraph}
  <div in:fly={{ x: 200 }} out:fly={{ x: -200 }}>
    <Chart />
  </div>
{/if}

{#if $settingValues.showDataTable}
  <div in:fly={{ x: 200 }} out:fly={{ x: -200 }}>
    <DataTable />
  </div>
{/if}
