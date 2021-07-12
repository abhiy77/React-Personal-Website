import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {RatingComponent} from '../atoms/RatingComponent';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  description : {
      fontWeight : 'bold',
      fontSize : '26px',
      alignItems : 'center',
  },
  details : {
      justifyContent : 'center',
      fontSize : '16px',
  }
});

function createData(description, details) {
  return { description,details };
}

const rows = [
  createData('Java Full Stack Development', <RatingComponent rating={4} value={4} /> ),
  createData('Java Spring', <RatingComponent rating={4} value={4} />),
  createData('Database Management', <RatingComponent rating={4}  value={4} />),
  createData('Networking', <RatingComponent rating={4} value ={3} />),
  createData('React Js', <RatingComponent rating={3} value={3} />),
  createData('Javascript',<RatingComponent rating={3} value={3} />)
];

export function SkillTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
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

export default SkillTable;