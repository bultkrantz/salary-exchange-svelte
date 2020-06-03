<script>
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text/index";
  import NotchedOutline from "@smui/notched-outline";
  import FloatingLabel from "@smui/floating-label";
  import chartFormValues from "../store/chartFormStore.js";
  import calculateSalaryExhange from "../utils/calculateSalaryExchange";

  let {
    startAmount,
    monthlySaving,
    avarageYield,
    timeHorizon
  } = $chartFormValues;
</script>

<style>
  .inline-block {
    display: inline-block;
    margin-left: 1em;
  }
</style>

<form
  on:change={() => calculateSalaryExhange({
      startAmount,
      monthlySaving,
      avarageYield,
      timeHorizon
    })}>
  <div>
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={startAmount}
        label="Startvärde"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Skriv in startvärde</HelperText>
    </div>
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={monthlySaving}
        label="Månadssparande"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Skriv in månadssparande</HelperText>
    </div>
  </div>

  <div>
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={avarageYield}
        label="Avkastning i procent"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Från 0 - 100%</HelperText>
    </div>
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={timeHorizon}
        label="Antal år"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Skriv in antal år</HelperText>
    </div>
  </div>
</form>
