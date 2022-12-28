import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Phage-1",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Phage-2",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Phage-3",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Phage-4",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Phage-5",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Phage-6",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const Chart = ({ color }) => {
  return (
    <div
      style={{ width: "100%", height: 250 }}
      className={`bg-${color}-500 rounded-2xl mx-auto text-white  shadow-xl shadow-${color}-200`}
    >
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <XAxis dataKey="name" stroke="#ffffff" scale="band" />

          <Tooltip />
          {/* <Legend /> */}

          <Bar dataKey="pv" barSize={10} fill="#ffffff" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
