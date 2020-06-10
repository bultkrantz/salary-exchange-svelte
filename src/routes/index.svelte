<script context="module">
	export async function preload(page, session) {
  const cms = await this.fetch("index.cms").then((res) => res.json());
  
  return { cms}
};

</script>

<script>
  import {onMount } from "svelte"
  import { fade } from "svelte/transition";
  import LinearProgress from "@smui/linear-progress";
  import InfoCard from "../components/InfoCard.svelte";
  import ErrorCard from "../ui/ErrorCard.svelte";
  export let cms;

  const fetchApi = async () => (
    process.browser && await fetch("index.json").then((res) => res.json())
  );
  
  const api = fetchApi();
  </script>


<style type="text/scss">
  div {
    margin-bottom: 100px;
  }
  h1 {
    text-align: center;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 1em 0em 1em 0;
  }

  h2 {
    text-align: center;
  }
  .skeleton-box {
    display: block;
    margin: 0 auto;
    min-height: 1em;
    position: relative;
    overflow: hidden;
    background-color: #f1eef1;
    margin-bottom: 20px;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
      );
      animation: shimmer 2s infinite;
      content: "";
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
  .skeleton-container {
    margin: 4em 0em 4em 0;
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>

{#await cms}
  <div class="skeleton-container">
    <span class="skeleton-box" style="width:50%; height: 3em;" />
  </div>
{:then {title}}
  <div in:fade={{ duration: 2000 }}>
    <h1>{title}</h1>
  </div>
  {:catch error}
  <ErrorCard {error}/>
{/await}

{#await api}
  <div class="skeleton-container">
    <span class="skeleton-box" style="width:100%; height: 2em;" />
    <span class="skeleton-box" style="width:100%;" />
    <span class="skeleton-box" style="width:100%;" />
    <span class="skeleton-box" style="width:100%;" />
  </div>
  <div class="skeleton-container">
    <span class="skeleton-box" style="width:100%; height: 2em;" />
    <span class="skeleton-box" style="width:100%;" />
    <span class="skeleton-box" style="width:100%;" />
    <span class="skeleton-box" style="width:100%;" />
  </div>

{:then value}
  <div in:fade={{ duration: 2000 }}>
    {#each value.informationSections as section}
      <div>
        <h2>{section.title}</h2>
        <p>{section.body}</p>

        <InfoCard title={section.usp.title} listItems={section.usp.list} />
      </div>
    {/each}
  </div>
{:catch error}
  <ErrorCard {error}/>
{/await}
