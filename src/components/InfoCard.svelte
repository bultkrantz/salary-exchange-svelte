<script>
  import Card, { Content } from "@smui/card";
  import List, { Item, Text } from "@smui/list";
  import { Icon } from "@smui/common";

  export let listItems = ["test", "test2"];
  export let title;
</script>

<style lang="scss">
  @import "@material/typography/mdc-typography";

  h2 {
    padding-top: 30px;
    align-self: center;
  }

  .card {
    width: 80%;
    margin-bottom: 20px;
  }
</style>

<div class="card">
  <Card>
    {#if title}
      <h2>{title}</h2>
    {/if}
    <Content>
      {#each listItems as item}
        <div>
          <Icon class="material-icons" style="width: 30px;">checkmark</Icon>
          <span class="mdc-typography--headline4">{item}</span>
        </div>
      {/each}
    </Content>
  </Card>
</div>
