import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerOptions: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
    },
}));

const Header = () => {
    const history = useHistory();
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleButtonClick = (pageURL: string) => {
        history.push(pageURL);
    };
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <>
                        <div className={classes.headerOptions}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                            >
                                <Tab
                                    label="User List"
                                    onClick={() => handleButtonClick('/')}
                                >
                                    <Link to="/" />
                                </Tab>
                                <Tab
                                    label="Add user"
                                    onClick={() => handleButtonClick('/user')}
                                >
                                    <Link to="/user" />
                                </Tab>
                            </Tabs>
                        </div>
                    </>
                    {/* )} */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export { Header };
