import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
	{
		name: "Jan",
		meal: 2400,
		other: 8500,
	},
	{
		name: "Feb",
		meal: 2450,
		other: 930,
	},
	{
		name: "Márc",
		meal: 1520,
		other: 840,
	},
	{
		name: "Ápr",
		meal: 3450,
		other: 8500,
	},
	{
		name: "Máj",
		meal: 12400,
		other: 500,
	},
	{
		name: "Jun",
		meal: 2480,
		other: 18500,
	},
	{
		name: "Júl",
		meal: 2480,
		other: 18500,
	},
	{
		name: "Aug",
		meal: 2400,
		other: 8500,
	},
	{
		name: "Szept",
		meal: 2400,
		other: 8500,
	},
	{
		name: "Okt",
		meal: 2400,
		other: 8500,
	},
	{
		name: "Nov",
		meal: 2400,
		other: 8500,
	},
	{
		name: "Dec",
		meal: 2400,
		other: 8500,
	},
];

export default function BarChartComp() {
	return (
		<BarChart
			style={{ maxWidth: "100%" }}
			width={700}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="meal" fill="#8884d8" />
			<Bar dataKey="other" fill="#82ca9d" />
		</BarChart>
	);
}
