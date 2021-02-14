import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Loader } from '../../layout/Loader';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
    },
    table: {
        maxWidth: 750,
    },
});

interface IUserList {
    _id: string;
    name: string;
    surname: string;
    email: string;
}

const UserList: React.FC = () => {
    const classes = useStyles();

    const [loading, setLoading] = useState<boolean>(true);
    const [userList, setUserList] = useState<IUserList[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/api/users');

            setUserList(response.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteUser = async (id: string) => {
        console.log(id);

        await axios
            .delete(`http://localhost:5000/api/users/${id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

        setUserList(userList.filter((user) => user._id !== id));
    };

    return loading ? (
        <Loader />
    ) : (
        <TableContainer component={Paper} classes={{ root: classes.root }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Surname</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((user) => (
                        <TableRow key={user._id}>
                            <TableCell align="left">{user.name}</TableCell>
                            <TableCell align="left">{user.surname}</TableCell>
                            <TableCell align="left">{user.email}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => deleteUser(user._id)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { UserList };
