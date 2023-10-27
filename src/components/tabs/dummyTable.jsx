import { Table, TableBody } from '@mui/material';
import { TableHead, TableRow, Typography } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './table.styled';
import { TableContainerStyled } from './table.styled';
import { tableData } from '../../lib/faker';

export default function DummyTable() {
  return (
    <>
      {tableData ? (
        <TableContainerStyled>
          <Table aria-label="dummy_table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map(data => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell component="th" scope="row">
                    {data.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{data.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {data.phone_number}
                  </StyledTableCell>
                  <StyledTableCell align="left">{data.address}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
      ) : (
        <Typography>Loading ...</Typography>
      )}
    </>
  );
}
