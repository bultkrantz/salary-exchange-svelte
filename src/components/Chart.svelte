<script>
  import Highcharts from "highcharts";
  import { onMount, beforeUpdate } from "svelte";
  import exchangeResult from "../store/exchangeResultStore.js";

  let chart;

  onMount(() => {
    chart = Highcharts.chart("chart", {
      chart: {
        type: "areaspline"
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          },
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get("rgba")
              ]
            ]
          }
        }
      },
      title: {
        text: "Beräkning"
      },
      legend: {
        layout: "vertical",
        align: "left",
        verticalAlign: "top",
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1
      },
      xAxis: {
        title: {
          text: "År"
        },
        categories: $exchangeResult.map(res => res.year)
      },
      yAxis: {
        title: {
          text: "Avkastning"
        }
      },
      series: [
        {
          name: "Årligt slutvärde 1",
          data: $exchangeResult.map(res => res.finalValue)
        }
      ],
      tooltip: {
        shared: true,
        valueSuffix: " SEK"
      },
      credits: {
        enabled: false
      }
    });
  });

  beforeUpdate(() => {
    chart &&
      chart.series &&
      chart.series[0].setData(
        $exchangeResult.map(result => result.finalValue),
        true
      );
  });
</script>

<div id="chart" />
