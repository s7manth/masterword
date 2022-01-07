import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpIcon from '@mui/icons-material/Help';
import Modal from '@mui/material/Modal';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import BasicModal from "../Modal/Modal.js";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
}
)
);

function NavBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
          {/* <IconButton
          onClick={handleOpen}
          edge="start"
          color="inherit"
          aria-label="Help"
          className={classes.helpButton}
        >
          <HelpIcon/>
        </IconButton> */}
        <BasicModal/>
            <Typography variant="h4" className={classes.logo}>
              MasterWord
            </Typography>
          </Toolbar>
        </AppBar>
      );
    }
export default NavBar;
    
