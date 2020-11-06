import { Typography } from "@material-ui/core";
import React, { PureComponent } from "react";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PieChartComp from "./charts/PieChartComp";
import BarChartComp from "./charts/BarChartComp";
// import PieChartComp from "./charts/PieChartComp";

interface IProps {
	pieData: [];
	barData: [];
}

interface IState {
	chartType: string;
}

const iconStyle = {
	fontSize: "30px",
	cursor: "pointer",
};

export default class Statement extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			chartType: "bar",
		};
	}

	setChartType = (e: any, type: string) => {
		this.setState({
			chartType: type,
		});
	};

	render() {
		return (
			<div>
				<Typography variant="h5" color="primary" style={{ marginBottom: "10px" }}>
					Statisztika
				</Typography>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div onClick={(event) => this.setChartType(event, "bar")}>
						<EqualizerIcon style={iconStyle} color="primary" />
					</div>
					<div onClick={(event) => this.setChartType(event, "circle")}>
						<DonutSmallIcon style={iconStyle} color="secondary" />
					</div>
					<div onClick={(event) => this.setChartType(event, "line")}>
						<TrendingUpIcon style={iconStyle} />
					</div>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					{this.state.chartType === "bar" ? (
						<BarChartComp data={this.props.barData} />
					) : (
						<PieChartComp data={this.props.pieData} />
					)}
				</div>
			</div>
		);
	}
}
