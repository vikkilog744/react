import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable = (props) => {
  const { rowData, columnData } =  props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {rowData.map((row, index) => (
            <TableCell key={'rowData_' + index} align={index !==0 ? 'right': 'left'}>
              {row}
            </TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {columnData.map((column, index) => (
            <TableRow
              key={'columnData_' + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{column.id}</TableCell>
              <TableCell align="right">{column.name}</TableCell>
              <TableCell align="right">{column.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;