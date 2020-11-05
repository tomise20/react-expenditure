import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import axios from "axios";

interface Props {
	starterAmount: number,
	currentAmount: number,
	monthlyTarget: number
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

export const Settings = () => {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		starterAmount: 0,
		currentAmount: 0,
		monthlyTarget: 0
	});

	const handleChange = (prop: keyof Props) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	useEffect(() => {
		axios.get("http://127.0.0.1:8000/api/default-data")
		.then(res => {
			setValues({
				...values,
				starterAmount: res.data.settings.start_amount,
				currentAmount: res.data.settings.current_amount,
				monthlyTarget: res.data.settings.monthly_target
			})
		})
		.catch(error => {
			console.log(error);
		})
	}, [])

	const onSaveSettings = () => {
		
	}
	
	return (
		<div>
			<Typography variant="h4" align="center" color="primary">
				Beállítások / Információ
			</Typography>
			<form noValidate autoComplete="off" className={classes.form}>
				<TextField
					name="startAmount"
					value={values.starterAmount}
					onChange={handleChange("starterAmount")}
					label="Induló összeg"
					id="outlined-start-adornment-1"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<TextField
					value={values.currentAmount}
					label="Jelenlegi összeg"
					id="outlined-start-adornment-2"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<TextField
					value={values.monthlyTarget}
					onChange={handleChange("monthlyTarget")}
					label="Havi cél"
					id="outlined-start-adornment-3"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<Button onClick={onSaveSettings} className={classes.button} variant="contained" color="secondary">
					Adatok Mentés
				</Button>
			</form>
		</div>
	);
};


export default Settings;
