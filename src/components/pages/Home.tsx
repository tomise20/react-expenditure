import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import UploadForm from '../partials/UploadForm';
import Statement from "../partials/Statement";
import Settings from '../partials/Settings';
import InfoTable from '../partials/InfoTable';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginBottom: theme.spacing(5),
			paddingBottom: theme.spacing(3)
		},
		title: {
			marginTop: theme.spacing(2),
		},
	})
);

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Container fixed>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography variant="h4" align="center" className={classes.title} color="primary">
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
};

export default Home;
