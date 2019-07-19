import PropTypes from 'prop-types';
import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';


const headRows = [
  { id: 'Position', numeric: false, disablePadding: true, label: 'Position' },
  { id: 'Club', text: false, disablePadding: true, label: 'Club' },
  { id: 'Played', text: false, disablePadding: true, label: 'Played' },
  { id: 'Won', text: false, disablePadding: true, label: 'Won' },
  { id: 'Drawn', text: false, disablePadding: true, label: 'Drawn' },
  { id: 'Lost', text: false, disablePadding: true, label: 'Lost' },
  { id: 'GF', text: false, disablePadding: true, label: 'GF' },
  { id: 'GA', text: false, disablePadding: true, label: 'GA' },
  { id: 'GD', text: false, disablePadding: true, label: 'GD' },
  { id: 'Points', text: false, disablePadding: true, label: 'Points' },
];

const EnhancedTableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort
}) => {

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'Select all desserts' }}
          />
        </TableCell>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}>
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}>
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead;