import clsx from 'clsx';
import fp from 'lodash/fp';
import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Reorder from '@material-ui/icons/Reorder';
import Refresh from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  actionButtons: {
    display: 'flex'
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = ({
  filtered,
  numSelected,
  handleDeleteTeams,
  removed,
  selected,
  setFiltered
}) => {

  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}>
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
            <Typography variant="h6" id="tableTitle">
              Nutrition
          </Typography>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {fp.includes(filtered, ['FULL', 'FILTERED']) && numSelected > 0 && (
          <Tooltip
            title="Delete"
            onClick={() => {
              handleDeleteTeams(fp.concat(removed, selected));
              setFiltered('FILTERED');
            }}>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
        {filtered === 'REMOVED' && numSelected > 0 && (
          <Tooltip
            title="Restore"
            onClick={() => { handleDeleteTeams(fp.differenceBy('Club', removed, selected)) }}>
            <IconButton aria-label="Restore">
              <Refresh />
            </IconButton>
          </Tooltip>
        )}
        {(numSelected === 0 && (
          <div className={classes.actionButtons}>
            {!fp.isEmpty(removed) && (
              <Tooltip
                title="Show deleted"
                onClick={() => { setFiltered('REMOVED') }}>
                <IconButton aria-label="Show deleted">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Filter list"
              onClick={() => { setFiltered('FILTERED') }}>
              <IconButton aria-label="Filter list">
                <Reorder />
              </IconButton>
            </Tooltip>
          </div>
        ))}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar;