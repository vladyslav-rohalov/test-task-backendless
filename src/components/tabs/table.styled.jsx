import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableRow, TableContainer } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.neutral,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  opacity: 0.9,
  border: `1px solid ${theme.palette.text.primary}`,
}));
