import React, {FormEvent, useEffect, useState} from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from '@material-ui/lab/Alert';
import axios from 'axios'

interface State {
	isAlert: boolean;
	isLoading: boolean;
	errors: string[];
	starterAmount: number;
	currentAmount: number;
	monthlyTarget: number;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: theme.spacing(3),
		},
		alert: {
			marginBottom: theme.spacing(3)
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

	const [settings, setSettings] = useState<State>({
		isLoading: false,
		isAlert: false,
		errors: [],
		starterAmount: 0,
		currentAmount: 0,
		monthlyTarget: 0,
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({ ...settings, [prop]: event.target.value });
	};

	useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/default-data')
            .then((res) => {
				const settings = res.data.settings;

				if(res.data.settings === null) {
					setSettings({...settings, isLoading: false});
					} else {
						setSettings({
							...settings, 
							isLoading: false,
							starterAmount: settings.start_amount,
							currentAmount: settings.current_amount,
							monthlyTarget: settings.monthly_target
						});
					}
				})
            .catch(error => {
                setSettings({...settings, errors: error.message});
            })
    }, []);

	const onSaveSettingsData = (e: FormEvent) => {
		e.preventDefault();
		axios.post('http://127.0.0.1:8000/api/set-settings', settings)
		.then((res) => {
			setSettings({...settings, isAlert: true});
		})
		.catch(error => {
			setSettings({...settings, errors: error.message});
		})
	}

	return (
		<div className={classes.root}>
			<div className={classes.alert}>
				{ settings.isAlert && 
					<Alert onClose={() => {setSettings({...settings, isAlert: false})}}>The settings is successfuly saved — check it out!</Alert>
				}
			</div>
			<Typography variant="h4" align="center" color="primary">
				Beállítások / Információ
			</Typography>
			<form noValidate autoComplete="off" className={classes.form}>
				<TextField
					name="startAmount"
					value={settings.starterAmount}
					onChange={handleChange("starterAmount")}
					disabled={false}
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
					value={settings.monthlyTarget}
					disabled={false}
					onChange={handleChange("monthlyTarget")}
					label="Havi cél"
					id="outlined-start-adornment-3"
					className={classes.textField}
					InputProps={{
						endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
					}}
					variant="outlined"
				/>
				<Button onClick={onSaveSettingsData} className={classes.button} variant="contained" color="secondary">
					Adatok Mentés
				</Button>
			</form>
		</div>
	);
};

export default Settings;
