import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page B", uv: 5000, pv: 1398, amt: 2210 },
  { name: "Page B", uv: 8000, pv: 1398, amt: 2210 },
  // More data...
];

const LineCharts = () => (
  <div className="p-2 rounded shadow-md overflow-x-scroll scrollbar_hidden">
    <LineChart height={300} width={500} data={data} className="w-full">
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </div>
);

export default LineCharts;
