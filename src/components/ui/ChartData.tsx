import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export default function ChartData() {
  const [chart, setChart]: any = useState({
    series: [
      {
        data: [10, 12, 11, 22, 33, 44],
      },
    ],
    options: {
      chart: {
        id: "fb",
        group: "social",
        type: "line",
        height: 160,
      },
      colors: ["#008FFB"],
    },

    seriesLine2: [
      {
        data: [99, 12, 44, 55, 66, 43],
      },
    ],
    optionsLine2: {
      chart: {
        id: "tw",
        group: "social",
        type: "line",
        height: 160,
      },
      colors: ["#546E7A"],
    },

    seriesArea: [
      {
        data: [12, 33, 43, 55, 12, 11],
      },
    ],
    optionsArea: {
      chart: {
        id: "yt",
        group: "social",
        type: "area",
        height: 160,
      },
      colors: ["#00E396"],
    },

    seriesSmall: [
      {
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    optionsSmall: {
      chart: {
        id: "ig",
        group: "social",
        type: "area",
        height: 160,
        width: 300,
      },
      colors: ["#008FFB"],
    },

    seriesSmall2: [
      {
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    optionsSmall2: {
      chart: {
        id: "li",
        group: "social",
        type: "area",
        height: 160,
        width: 300,
      },
      colors: ["#546E7A"],
    },
  });
  return (
    <Box w="100%">
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="area"
        height={350}
        width="100%"
      />
    </Box>
  );
}
