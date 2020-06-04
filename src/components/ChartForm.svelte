<script>
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text/index";
  import NotchedOutline from "@smui/notched-outline";
  import FloatingLabel from "@smui/floating-label";
  import Slider from "@smui/slider";
  import Fab, { Label, Icon } from "@smui/fab";
  import FormField from "@smui/form-field";
  import Switch from "@smui/switch";
  import chartFormValues from "../store/chartFormStore.js";
  import settingValues from "../store/settingStore.js";
  import exchangeResult from "../store/exchangeResultStore.js";
  import calculateSalaryExhange from "../utils/calculateSalaryExchange";

  $: {
    exchangeResult.updateExchangeResult($chartFormValues);
  }

  // JOHAN: Dina event handlers behöver inte vara wrappade i on:click={() => { chartFormValues.reset() }}
  // Så länge metoden inte behöver ta emot några speciella parametrar som ex: ett index värde i en {#each}
  // loop. Eller om event handlern bara vill ta emot event objektet. så räcker det att skriva on:click={charformValues.reset}
</script>

<style>
  .form-wrapper {
    padding: 25px;
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .inline-block {
    display: inline-block;
    margin-left: 1em;
  }

  .margins {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .settings {
    border-color: gainsboro;
    border-radius: 10px;
    border-style: solid;
    padding: 15px;
  }
</style>

<div class="form-wrapper">
  <h4>Fyll i alla värden för att se en graf på beräknad vinst</h4>
  <div class="margins">
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={$chartFormValues.startAmount}
        label="Startvärde"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Skriv in startvärde</HelperText>
    </div>
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={$chartFormValues.monthlySaving}
        label="Månadssparande"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Skriv in månadssparande</HelperText>
    </div>
    <div class="inline-block">
      <Textfield
        type="number"
        variant="filled"
        bind:value={$chartFormValues.avarageYield}
        label="Avkastning i procent"
        input$aria-controls="helper-text-filled-a"
        input$aria-describedby="helper-text-filled-a" />
      <HelperText id="helper-text-filled-a">Från 0 - 100%</HelperText>
    </div>
  </div>

  <div class="margins">
    <FormField align="end" style="display: flex;">
      <Slider bind:value={$chartFormValues.timeHorizon} discrete />
      <span
        slot="label"
        style="padding-right: 12px; width: max-content; display: block;">
        Antal år
      </span>
    </FormField>
  </div>

  <div class="settings">
    <Fab
      on:click={
        chartFormValues.reset
      }
      extended>
      <Icon class="material-icons">autorenew</Icon>
      <Label>Nollställ</Label>
    </Fab>
    <Fab
      on:click={
        chartFormValues.showExample
      }
      extended>
      <Icon class="material-icons">poll</Icon>
      <Label>Exempel</Label>
    </Fab>
    <FormField>
      <Switch bind:checked={$settingValues.showGraph} />
      <span slot="label">Visa graf</span>
    </FormField>
    <FormField>
      <Switch bind:checked={$settingValues.showDataTable} />
      <span slot="label">Visa datatabell</span>
    </FormField>
  </div>
</div>
