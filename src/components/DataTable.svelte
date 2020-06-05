<script>
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import exchangeResult from "../store/exchangeResultStore.js";
</script>

<div>
  <DataTable table$aria-label="People list">
    <Head>
      <Row>
        <Cell>År</Cell>
        <Cell>Startvärde</Cell>
        <Cell>Årligt sparande</Cell>
        <Cell>Ackumulerat sparande</Cell>
        <Cell>Årets avkastning</Cell>
        <Cell>Ackumulerad avkastning</Cell>
        <Cell>Slutvärde</Cell>
      </Row>
    </Head>
    <Body>
      {#each $exchangeResult as result, index}
        <Row>
          <Cell>{index + 1}</Cell>
          <Cell>{result.startAmount}</Cell>
          <Cell>{result.yearlySaving}</Cell>
          <Cell>{result.accumulatedSavings}</Cell>
          <Cell>{result.yearsReturn}</Cell>
          <Cell>{result.accumulatedReturn}</Cell>
          <Cell>{result.finalValue}</Cell>
        </Row>
      {/each}
    </Body>
  </DataTable>
</div>
