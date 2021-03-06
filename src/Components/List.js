import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Hidden from '@material-ui/core/Hidden';
import moment from 'moment'
import firebase from '../firebase.js'






//CREATION DES DONNEES
/*
function createData(name, qtty_1, blade_1, tower_1, generation, client, priority, country, order_intake, kickoff, TM, SM, RS, logBudget, gateStatus, comments, status) {
  return { name, qtty_1, blade_1, tower_1, generation, client, priority, country, order_intake, kickoff, TM, SM, RS, logBudget, gateStatus, comments, status};
}
*/

/*
const rows = [
  createData('Craco', 10, 'N131', 'TS114', 'Delta', 'Margherita', 'High', 'Italy', moment('2020/11/30').format('X'), moment('2019/10/03').format('X'), 'H. Del Fabbro', 'G. Celliberti', 'yes', 'yes', 'Gate4', 'handover done fdsfdsf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g sf fdsgf gfdggg gg g ', 'closed' ),
  createData('San Carlo', 2, 'N131', 'TS84', 'Delta', 'Margherita', 'Low', 'Italy', moment('2020/03/01').format('X'), moment('2020/05/05').format('X'), 'H. Del Fabbro', 'G. Celliberti', 'yes', 'no', 'Gate3', 'handover done', 'open'),
  createData('Kella', 9, 'N149', 'TS105', 'Delta 4000', 'Motor Oil Hellas', 'Medium','Greece', moment('2020/12/15').format('X'), moment('2018/02/08').format('X'), 'M. Seduk', 'P. Lappas', 'no', 'yes', 'Gate3', 'handover done', 'open')
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0)
];*/


//FONCTION POUR LE TRI EN GENERAL

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  //console.log(orderBy)
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

//TITRE DES COLONNES

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'qtty_1', numeric: true, disablePadding: false, label: 'Qtty (1)' },
  { id: 'blade_1', numeric: true, disablePadding: false, label: 'Blade (1)' },
  { id: 'tower_1', numeric: true, disablePadding: false, label: 'Tower (1)' },
  { id: 'generation', numeric: true, disablePadding: false, label: 'Generation ' },
  { id: 'client', numeric: true, disablePadding: false, label: 'Client' },
  { id: 'priority', numeric: true, disablePadding: false, label: 'Priority' },
  { id: 'country', numeric: true, disablePadding: false, label: 'Country' },
  { id: 'order_intake', numeric: true, disablePadding: false, label: 'Order Intake' },
  { id: 'kickoff', numeric: true, disablePadding: false, label: 'Kick-Off' },
  { id: 'TM', numeric: true, disablePadding: false, label: 'Tender Manager' },
  { id: 'SM', numeric: true, disablePadding: false, label: 'Sales Manager' },
  { id: 'RS', numeric: true, disablePadding: false, label: 'Road Survey' },
  { id: 'logBudget', numeric: true, disablePadding: false, label: 'LOG Budget?' },
  { id: 'gateStatus', numeric: true, disablePadding: false, label: 'Gate' },
  { id: 'comments', numeric: true, disablePadding: false, label: 'Comments' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' }

];

//RENDU DE LA COLONNE DE TITRE

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    //console.log('colonne ', property, ' clicked')
    //console.log(event, property)
    onRequestSort(event, property);

  };

  const styles ={
    titre:{
      fontWeight: 'bold'
    }
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (


          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              style={styles.titre}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>


        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//BAR AU DESSUS DU TABLEAU PRINCIPALE (incluant logique)

const useToolbarStyles = makeStyles((theme) => ({
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
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, onClickSelection, onClickFilter, children } = props;

  return (
    <>
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Tender Project Review
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon onClick={onClickSelection} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon onClick={onClickFilter} />
          </IconButton>
        </Tooltip>
      )}

    </Toolbar>

    {children}
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  survolLigne: {
    backgroundColor: 'white'
  },
  survolItem: {
    //backgroundColor: 'red',
    '&:hover': {
      background: "#FFD29A",
      borderRadius: '15px'
    }
  },
}));

//FONCTION PRINCIPALE

export default function EnhancedTable({

  tableau,
  onClickQtty,
  onClickBlade,
  onClickTower,
  onClickGeneration,
  onClickPriority,
  onClickCountry,
  onClickTM,
  onClickSM,
  onClickRoad,
  onClickLOGBudget,
  onClickGate,
  onClickStatus,
  onClickClient,
  onClickComments,
  onClickKO,
  onClickOI,
  onClickFilter,
  children

}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);




  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableau.map((n) => n.project);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {

//console.log('event', event)
//console.log('name', name)

    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableau.length - page * rowsPerPage);


  const onClickSelection = () => {
    //console.log('dans la fonction', selected)
    //ici on supprime les projets selectionnés

    selected.forEach(item => {



      console.log('on va supprimer ', item)

      var myQuery = firebase.firestore().collection("Projects").where("project", "==", item)

      myQuery.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();



    setSelected([])
  });
});



    })

  }



  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} onClickSelection={onClickSelection} onClickFilter={onClickFilter} children={children} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tableau.length}
            />
            <TableBody>
              {stableSort(tableau, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.project);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      //onClick={(event) => handleClick(event, row.project)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                      className={classes.survolLigne}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.project)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.project}
                      </TableCell>
                      <TableCell align="right" onClick={()=>onClickQtty(row.project, row.quantity)} hover className={classes.survolItem}>{row.quantity}</TableCell>
                      <TableCell align="right" onClick={()=>onClickBlade(row.project, row.blade)} hover className={classes.survolItem}>{row.blade}</TableCell>
                      <TableCell align="right" onClick={()=>onClickTower(row.project, row.tower)} hover className={classes.survolItem}>{row.tower}</TableCell>
                      <TableCell align="right" onClick={()=>onClickGeneration(row.project, row.generation)} hover className={classes.survolItem}>{row.generation}</TableCell>

                      <TableCell align="right" onClick={()=>onClickClient(row.project, row.client)} hover className={classes.survolItem}>{row.client}</TableCell>

                      <TableCell align="right"  onClick={()=>onClickPriority(row.project, row.priority)} hover className={classes.survolItem} >{row.priority}</TableCell>
                      <TableCell align="right"  onClick={()=>onClickCountry(row.project, row.country)} hover className={classes.survolItem} >{row.country}</TableCell>
                      <TableCell align="right" onClick={()=>onClickOI(row.project,row.dateOI)} hover className={classes.survolItem}>{moment(row.dateOI).format("DD/MM/yyyy")}</TableCell>

                      <TableCell align="right" onClick={()=>onClickKO(row.project,row.dateKO)} hover className={classes.survolItem}>{moment(row.dateKO).format("DD/MM/yyyy")}</TableCell>
                      <TableCell align="right" onClick={()=>onClickTM(row.project, row.tm)} hover className={classes.survolItem}>{row.tm}</TableCell>
                      <TableCell align="right" onClick={()=>onClickSM(row.project, row.sm)} hover className={classes.survolItem}>{row.sm}</TableCell>
                      <TableCell align="right" onClick={()=>onClickRoad(row.project, row.roadSurvey)} hover className={classes.survolItem}>{row.roadSurvey}</TableCell>
                      <TableCell align="right" onClick={()=>onClickLOGBudget(row.project, row.logBudget)} hover className={classes.survolItem}>{row.logBudget}</TableCell>
                      <TableCell align="right" onClick={()=>onClickGate(row.project, row.gate)} hover className={classes.survolItem}>{row.gate}</TableCell>
                      <TableCell align="right" onClick={()=>onClickComments(row.project, row.comments)} style={{width: 400}} hover className={classes.survolItem}>{row.comments}</TableCell>
                      <TableCell align="right" onClick={()=>onClickStatus(row.project, row.status)} hover className={classes.survolItem}>{row.status}</TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableau.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
