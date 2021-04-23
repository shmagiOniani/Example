import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400, fill: "rgb(0, 136, 254)" },
  { name: "Group B", value: 300, fill: "rgb(0, 196, 159)" },
  { name: "Group C", value: 300, fill: "rgb(255, 187, 40)" },
  { name: "Group D", value: 200, fill: "rgb(255, 128, 66)" },
  { name: "Group E", value: 278, fill: "rgb(66, 245, 161)" },
  { name: "Group F", value: 189, fill: "rgb(138, 110, 110)" },
];

export default class CircleChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/two-simple-pie-chart-otx9h";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
