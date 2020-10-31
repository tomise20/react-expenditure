import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

interface State {
	starterAmount: number;
	currentAmount: number;
	monthlyAchive: number;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: theme.spacing(3),
		},
		form: {
			display: "flex",
			alignItems: "center",
		},
		textField: {
			margin: theme.spacing(3),
		},
		title: {
			marginBottom: theme.spacing(3),
		},
		button: {
			fontWeight: "bold",
			verticalAlign: "middle",
		},
	})
);

const Settings = () => {
	const classes = useStyles();

	const [settings, setSettings] = React.useState<State>({
		starterAmount: 215000,
		currentAmount: 198000,
		monthlyAchive: 195000,
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({ ...settings, [prop]: event.target.value });
	};

	return (
		<div className={classes.root}>
			<Typography variant="h4" align="center" color="primary">
				Beállítások / Információ
			</Typography>
			<form noValidate autoComplete="off" className={classes.form}>
				<TextField
					value={settings.starterAmount}
					disabled={settings.starterAmount > 0 ? true : false}
					label="Induló összeg"
					id="outlined-start-adornment-1"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<TextField
					value={settings.currentAmount}
					disabled={true}
					label="Jelenlegi összeg"
					id="outlined-start-adornment-2"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<TextField
					value={settings.monthlyAchive}
					disabled={settings.monthlyAchive > 0 ? true : false}
					label="Havi cél"
					id="outlined-start-adornment-3"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<Button className={classes.button} variant="contained" color="secondary">
					Adatok Mentés
				</Button>
			</form>
		</div>
	);
};

export default Settings;
