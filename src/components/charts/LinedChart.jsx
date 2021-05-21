import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "იან",
    მიმდინარე: 0,
    გასული: 0,
    amt: 2400,
  },
  {
    name: "თებ",
    მიმდინარე: 3000,
    გასული: 1398,
    amt: 2210,
  },
  {
    name: "მარ",
    მიმდინარე: 2000,
    გასული: 9800,
    amt: 2290,
  },
  {
    name: "აპრ",
    მიმდინარე: 2780,
    გასული: 3908,
    amt: 2000,
  },
  {
    name: "მაი",
    მიმდინარე: 1890,
    გასული: 4800,
    amt: 2181,
  },
  {
    name: "ივნ",
    მიმდინარე: 2390,
    გასული: 3800,
    amt: 2500,
  },
  {
    name: "ივლ",
    მიმდინარე: 3490,
    გასული: 4300,
    amt: 2100,
  },
];

export default class LinedChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            strokeWidth={3}
            type="monotone"
            dataKey="გასული"
            stroke="rgb(255, 193, 7)"
            activeDot={{ r: 8 }}
          />
          <Line
            strokeWidth={3}
            type="monotone"
            dataKey="მიმდინარე"
            stroke="rgb(0, 171, 85)"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
