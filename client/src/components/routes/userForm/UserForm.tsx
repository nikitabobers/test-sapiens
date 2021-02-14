import React from 'react';
import {
    Box,
    Paper,
    TextField,
    InputLabel,
    Button,
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '300px',
        minWidth: '300px',
    },
    formContainer: {
        width: '100%',
        minHeight: '300px',
        padding: '1rem 2rem 0 2rem',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '1.5rem auto',
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.9rem',
        margin: '0',
    },
});

interface IData {
    name: string;
    surname: string;
    email: string;
}

const UserForm = () => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data: IData) => {
        axios
            .post('http://localhost:5000/api/users', data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <Box mt="2rem" className={classes.root}>
            <Paper className={classes.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            inputRef={register({
                                required: true,
                                minLength: 2,
                            })}
                            error={errors.name}
                        />
                        {errors.name && errors.name.type === 'required' && (
                            <p className={classes.errorMessage}>
                                Name is reqiured
                            </p>
                        )}
                        {errors.name && errors.name.type === 'minLength' && (
                            <p className={classes.errorMessage}>
                                Please enter at least 2 characters
                            </p>
                        )}
                    </InputLabel>
                    <InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="surname"
                            label="Surname"
                            name="surname"
                            autoComplete="surname"
                            autoFocus
                            inputRef={register({
                                required: true,
                                minLength: 2,
                            })}
                            error={errors.surname}
                        />
                        {errors.surname &&
                            errors.surname.type === 'required' && (
                                <p className={classes.errorMessage}>
                                    Surname is reqiured
                                </p>
                            )}
                        {errors.surname &&
                            errors.surname.type === 'minLength' && (
                                <p className={classes.errorMessage}>
                                    Please enter at least 2 characters
                                </p>
                            )}
                    </InputLabel>
                    <InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            inputRef={register({
                                required: true,
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            })}
                            error={errors.email}
                        />
                        {errors.email && errors.email.type === 'required' && (
                            <p className={classes.errorMessage}>
                                Email is reqiured
                            </p>
                        )}
                        {errors.email && errors.email.type === 'pattern' && (
                            <p className={classes.errorMessage}>
                                Email is not valid
                            </p>
                        )}
                    </InputLabel>
                    <Grid className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export { UserForm };
