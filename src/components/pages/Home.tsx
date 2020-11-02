import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import UploadForm from '../partials/UploadForm';
import Statement from "../partials/Statement";
import Settings from '../partials/Settings';
import InfoTable from '../partials/InfoTable';


export default class Home extends React.Component {

	render() {
		return (
			<div style={{marginBottom: "30px"}}>
				<Container fixed>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h4" align="center" style={{marginBottom: "15px"}} color="primary">
								Kiadás vezető
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Settings />
						</Grid>
						<Grid item lg={4}>
							<UploadForm />
						</Grid>
						<Grid item lg={8}>
							<Statement />
						</Grid>
						<Grid item xs={12}>
							<InfoTable />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}
