import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jAn 03",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Feb 03",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Mar 03",
    uv: 808,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Apr 03",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "May 03",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Jun 03",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Jul 03",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Aug 03",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Sep 03",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
];

export default class MixedChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/composed-chart-with-axis-label-55s1s";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <XAxis
            dataKey="name"
            label={{ position: "insideBottomRight", offset: 0 }}
            scale="band"
          />
          <YAxis label={{ angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Area
            strokeWidth={2}
            type="monotone"
            dataKey="amt"
            fill="rgb(255 193 7 / 20%)"
            stroke="rgb(255, 193, 7 )"
          />
          <Bar dataKey="pv" barSize={8} fill="rgb(0, 171, 85)" />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="uv"
            stroke="rgb(24, 144, 255)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
