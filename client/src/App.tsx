import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { UserForm } from './components/routes/userForm/UserForm';
import { UserList } from './components/routes/userList/UserList';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Container maxWidth="sm">
                    <Switch>
                        <Route exact path="/" component={UserList} />
                        <Route exact path="/user" component={UserForm} />
                    </Switch>
                </Container>
            </Fragment>
        </Router>
    );
}

export default App;
