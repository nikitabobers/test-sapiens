import React from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
}));
const Loader = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" classes={{ root: classes.root }}>
            <CircularProgress />
        </Container>
    );
};

export { Loader };
