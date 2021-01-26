import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../Images/Logo.png'
import {useAuth} from '../Context/AuthContext'
import {useHistory} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.25,
  },
  agencement:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  meteo:{
    display:'flex',
    flexDirection: 'column',
    padding: '10px'
    //gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
    //gridColumnGap: '5px',
    //gridRowGap: '5px',
    //backgroundColor: 'red'
  },
  gridItem:  {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridColumnGap: '25px',

    //gridRowGap: '10px'
  //backgroundColor: 'rgba(255, 255, 255, 0.8)',
  //border: '1px solid rgba(0, 0, 0, 0.8)',
  //padding: '20px',
  //fontSize: '14px',
  //textAlign: 'center'
},
truc: {
  width:80,
  display: 'flex',
  alignItems: 'center'
}

}));

export default function MenuAppBar({meteo}) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const {logout} = useAuth()
  const history = useHistory()

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    await logout()
    history.push('/')
  }


  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar className={classes.agencement}>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="LOGO"/>
          </Typography>


<Hidden smDown>
          <div className={classes.meteo}>{

            meteo?.length >0 ?

            meteo.map(item =>
              <>
              <div className={classes.gridItem}>
                        <p className={classes.truc}>{item.city== 'Donji grad' ? 'Zagreb' : item.city}</p>
                        <p  className={classes.truc}>{item.temp} °C</p>
                        <p className={classes.truc}>{item.wind} m/s</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${item.weather}@2x.png`}
                              alt={item.weather}
                              style={{width: 50}}
                              />
              </div>
              </>
            )




            : 'no'




          }</div>
</Hidden>

          {!auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>

              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
