import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "ახალი", value: 15 },
  { name: "დაკავშირებული", value: 4 },
  { name: "გამორთული", value: 3 },
  { name: "დაზიანებული", value: 3 },
  { name: "განუსაზღვრელი", value: 7 },
  { name: "წაშლილი", value: 2 }
];
 

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#FFBB28', "#f50057"];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
        
      </text>
        <text x={cx} y={cy + 10 } dy={8} textAnchor="middle" fill={fill}>

        {payload.value}
        </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

    </g>
  );
};

export default function InsideTextChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );



  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
           {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
      </Pie>
   
    </PieChart>
  );
}

