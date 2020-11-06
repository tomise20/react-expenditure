import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

export interface IPieChartProps {
	data: [];
}

export default class PieChartComp extends PureComponent<IPieChartProps, any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		console.log(this.props.data);
		return (
			<PieChart width={400} height={400}>
				<Pie
					dataKey="value"
					isAnimationActive={false}
					data={this.props.data}
					cx={200}
					cy={200}
					outerRadius={80}
					fill="#4287f5"
					label
				/>
				<Tooltip />
			</PieChart>
		);
	}
}
