import React from 'react';
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

interface State {
    name: string;
    type: string;
    amount: string;
    subType: string;
    date: Date | null;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField: {
			marginBottom: theme.spacing(3),
		},
		title: {
			marginBottom: theme.spacing(3)
        },
        button: {
            fontWeight: "bold"
        }
	})
);


const types = [
    {
      value: '0',
      label: 'Kiadás',
    },
    {
        value: '1',
        label: 'Bevétel',
    }
];

const subTypes = [
    {
      value: 'rezsi',
      label: 'Rezsi',
    },
    {
        value: 'etel',
        label: 'Étel/Nasi',
    },
    {
        value: 'telefon',
        label: 'Telefonszámla'
    },
    {
        value: 'egyeb',
        label: 'Egyéb'
    }
];


const UploadForm = () =>  {
    const classes = useStyles();

    const getToday = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return today = new Date(`${mm}/${dd}/${yyyy}`);
    }
    
    const [values, setValues] = React.useState<State>({
        name: '',
        type: '',
        amount: '',
        subType: '',
        date: getToday()
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleDateChange = (date: Date | null) => {
        setValues({ ...values, date: date });
    };
    

    return (
        <div>
            <Typography variant="h5" className={classes.title} color="primary">Kiadás/Bevétel felvétele</Typography>
            <form noValidate autoComplete="off">
                <TextField className={classes.textField} label="Megnevezése" variant="outlined" fullWidth={true} />
                <TextField
                    fullWidth={true}
                    className={classes.textField}
                    id="standard-select-currency"
                    select
                    variant="outlined"
                    label="Típus"
                    value={values.name}
                    onChange={handleChange('name')}
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
                    value={values.subType}
                    onChange={handleChange('subType')}
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
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Nap megadása"
                        value={values.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Button className={classes.button} fullWidth={true} color="primary" >Mentés</Button>
            </form>
        </div>
    );
}

export default UploadForm;