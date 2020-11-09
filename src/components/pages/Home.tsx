import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import UploadForm from "../partials/UploadForm";
import Statement from "../partials/Statement";
import Settings from "../partials/Settings";
import InfoTable from "../partials/InfoTable";
import { Alert } from "@material-ui/lab";
import axios from "axios";

interface IHomeState {
	isAlert: boolean;
	changeName: string;
	pieChartData: [];
	barChartData: [];
}

export default class Home extends React.Component<any, IHomeState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isAlert: false,
			changeName: "",
			pieChartData: [],
			barChartData: [],
		};
	}

	componentDidMount() {
		axios
			.get("http://127.0.0.1:8000/api/get-charts-data")
			.then((res) => {
				console.log(res);
				this.setState({
					...this.state,
					pieChartData: res.data.pieChartData,
					barChartData: res.data.barChartData,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div style={{ marginBottom: "30px" }}>
				<Container fixed>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h4" align="center" style={{ marginBottom: "15px" }} color="primary">
								Kiadás vezető
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<div style={{ marginBottom: "25px" }}>
								{this.state.isAlert && (
									<Alert
										severity="success"
										onClose={() => this.setState({ ...this.state, isAlert: false })}
									>
										The settings is successfuly saved — <strong>check it out!</strong>
									</Alert>
								)}
							</div>
						</Grid>
						<Grid item xs={12}>
							<Settings />
						</Grid>
						<Grid item lg={4}>
							<UploadForm
								isChanged={(value: string) => this.setState({ changeName: value })}
								isAlert={() => this.setState({ ...this.state, isAlert: true })}
							/>
						</Grid>
						<Grid item lg={8}>
							<Statement pieData={this.state.pieChartData} barData={this.state.barChartData} />
						</Grid>
						<Grid item xs={12}>
							<InfoTable freshTable={this.state.changeName} />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}
