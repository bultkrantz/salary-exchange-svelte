<script>
  import Card, { Content } from "@smui/card";
  import List, { Item, Text } from "@smui/list";
  import { Icon } from "@smui/common";

  export let listItems = ["test", "test2"];
export let title;

 // För att det ska bli mer korrekt HTML, så borde du göra något mer såhär:
</script>

<style lang="scss">
  @import "@material/typography/mdc-typography";

  h2 {
    padding-top: 30px;
    align-self: center;
  }

  .card {
    width: 80%;
    margin: 0 auto;
  }

  li {
    list-style: url("/link/to/checkmark/image/or/svg");
  }
</style>

<div class="card">
  <Card>
    {#if title}
      <h2>{title}</h2>
    {/if}
    <Content>
      <ul>
      {#each listItems as item}
        <li>
          <span class="mdc-typography--headline4">{item}</span>
        </li>
      {/each}
      </ul>
    </Content>
  </Card>
</div>