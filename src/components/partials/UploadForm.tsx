import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import InputAdornment from "@material-ui/core/InputAdornment";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from "axios";

interface State {
	name: string;
	type: string;
	amount: string;
	subtype: string;
	date: Date | null;
}

interface FromProps {
	isChanged(value: string): void;
	isAlert(): void;
}

interface ErrorState {
	error: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField: {
			marginBottom: theme.spacing(3),
		},
		title: {
			marginBottom: theme.spacing(3),
		},
		button: {
			fontWeight: "bold",
		},
	})
);

const types = [
	{
		value: "subtraction",
		label: "Kiadás",
	},
	{
		value: "add",
		label: "Bevétel",
	},
];

const subTypes = [
	{
		value: "rezsi",
		label: "Rezsi",
	},
	{
		value: "salary",
		label: "Fizetés",
	},
	{
		value: "etel",
		label: "Étel/Nasi",
	},
	{
		value: "telefon",
		label: "Telefonszámla",
	},
	{
		value: "egyeb",
		label: "Egyéb",
	},
];

const UploadForm: React.FunctionComponent<FromProps> = (props) => {
	const classes = useStyles();

	const getToday = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();

		return (today = new Date(`${mm}/${dd}/${yyyy}`));
	};

	const [cost, setCost] = useState<State>({
		name: "",
		type: "",
		amount: "",
		subtype: "",
		date: getToday(),
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setCost({ ...cost, [prop]: event.target.value });
	};

	const handleDateChange = (date: Date | null) => {
		setCost({ ...cost, date: date });
	};

	const onAddCost = () => {
		axios
			.post("http://127.0.0.1:8000/api/add-cost", cost)
			.then((res) => {
				console.log("Cost is successfully saved!");
				props.isChanged(cost.name);
				props.isAlert();

				setCost({
					...cost,
					name: "",
					type: "",
					amount: "",
					subtype: "",
					date: getToday(),
				});
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div>
			<Typography variant="h5" className={classes.title} color="primary">
				Kiadás/Bevétel felvétele
			</Typography>
			<form noValidate autoComplete="off">
				<TextField
					className={classes.textField}
					name="name"
					value={cost.name}
					label="Megnevezése"
					variant="outlined"
					onChange={handleChange("name")}
					fullWidth={true}
				/>
				<TextField
					fullWidth={true}
					className={classes.textField}
					id="standard-select-currency"
					select
					name="type"
					variant="outlined"
					label="Típus"
					value={cost.type}
					onChange={handleChange("type")}
				>
					{types.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					fullWidth={true}
					label="Összeg"
					id="outlined-start-adornment"
					name="amount"
					value={cost.amount}
					onChange={handleChange("amount")}
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<TextField
					fullWidth={true}
					className={classes.textField}
					id="standard-select-currency"
					select
					variant="outlined"
					label="Pontos típus"
					name="subtype"
					value={cost.subtype}
					onChange={handleChange("subtype")}
				>
					{subTypes.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Grid container justify="space-around">
						<KeyboardDatePicker
							fullWidth={true}
							disableToolbar
							name="date"
							variant="inline"
							format="yyyy/MM/dd"
							margin="normal"
							id="date-picker-inline"
							label="Nap megadása"
							value={cost.date}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</MuiPickersUtilsProvider>
				<Button className={classes.button} fullWidth={true} color="primary" onClick={onAddCost}>
					Mentés
				</Button>
			</form>
		</div>
	);
};

export default UploadForm;
