import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    display: 'inline'
  },
  description : {
      fontWeight : 'bold',
      fontSize : '16px'
  },
  details : {
      fontSize : '16px'
  }
});

function createData(description, details) {
  return { description,details };
}

const rows = [
  createData('Github', 'abhishek-yelisetti'),
  createData('Linked in', 'abhishek-yelisetti'),
  createData('Reddit', 'abhishekyelisetti212'),
  createData('Twitter', 'abhishek3345'),
  createData('Instagram', 'abhishek3345'),
  createData('Facebook','abhishek-yelisetti')
];

export function WebsiteTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.description}>
              <TableCell component="th" scope="row" className={classes.description}>
                {row.description}
              </TableCell>
              <TableCell className={classes.details}>{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WebsiteTable;