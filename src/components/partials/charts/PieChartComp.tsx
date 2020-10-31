import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const pieChartData = [
	{ name: "Étel", value: 18500 },
	{ name: "Rezsi", value: 15200 },
	{ name: "Egyéb", value: 4560 },
	{ name: "Telefonszámla", value: 3500 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class PieChartComp extends PureComponent {
	render() {
		return (
			<PieChart width={400} height={400}>
				<Pie
					data={pieChartData}
					cx={200}
					cy={200}
					labelLine={false}
					label
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
				>
					{pieChartData.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		);
	}
}
