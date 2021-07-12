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
  createData('Full Name', 'Abhishek Yelisetti'),
  createData('Email', 'abhishek.yelisetti@zemosolabs.com'),
  createData('Mobile Number', '8309545012'),
  createData('Telephone Number', '+040 - 274 26158'),
  createData('Address', 'Flat no 301 , H no 2-2-185/55/E ,St no 12, Harsha Homes, Somasundernagar , Hyderabad,India '),
  createData('Github' , 'abhishek.yelisetti'),
  createData('Linkedin', 'Abhishek Yelisetti'),
  createData('Facebook', 'Abhishek Yelisetti')
];

export function AboutTable() {
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

export default AboutTable;