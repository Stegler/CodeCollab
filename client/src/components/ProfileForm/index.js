import React from 'react';
import "./style.css";
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

function Name() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>
                <TextField
                    className={classes.margin}
                    label="First Name"
                    id="mui-theme-provider-standard-input"
                />
                <TextField
                    className={classes.margin}
                    label="Last Name"
                    id="mui-theme-provider-standard-input"
                />
                <TextField
                    className={classes.margin}
                    label="Age"
                    id="mui-theme-provider-standard-input"
                />
                <TextField
                    className={classes.margin}
                    label="City"
                    id="mui-theme-provider-standard-input"
                />
                <TextField
                    className={classes.margin}
                    label="State"
                    id="mui-theme-provider-standard-input"
                />
            </ThemeProvider>
        </form>
    );
}

export default Name;