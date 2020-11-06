import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export interface IBarCharaData {
	data: [];
}

export default class BarChartComp extends React.PureComponent<IBarCharaData, any> {
	render() {
		console.log(this.props.data);
		return (
			<BarChart
				style={{ maxWidth: "100%" }}
				width={700}
				height={300}
				data={this.props.data}
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
				<Bar dataKey="plus" fill="#8884d8" />
				<Bar dataKey="subtraction" fill="#82ca9d" />
			</BarChart>
		);
	}
}
