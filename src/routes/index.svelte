<script>
  import { fade } from "svelte/transition";
  import LinearProgress from "@smui/linear-progress";
  import InfoCard from "../components/InfoCard.svelte";

  async function fetchData(url) {
    const result = await fetch(url);
    return await result.json();
  }

  let cms = fetchData("http://localhost:3001/cms");
  let api = fetchData("http://localhost:3001/api");

</script>

<style type="text/scss">
  .error {
    background: #ffc5c5;
    border-radius: 10px;
    margin: 0 auto;
    width: 50%;
    padding: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
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
<div class="error">
  <p>Ooops! Ett fel har uppstått, försök igen senare!</p>
  <p>{error}</p>
</div>
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
<div class="error">
  <p>Ooops! Ett fel har uppstått, försök igen senare!</p>
  <p>{error}</p>
</div>
{/await}
