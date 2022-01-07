import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpIcon from '@mui/icons-material/Help';
import Modal from '@mui/material/Modal';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import BasicModal from "../Modal/Modal.js";
import BasicModal2 from "../Modal/Modal2.js";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(0),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      // cursor: "pointer",
    },
    abRoot: {
      backgroundColor: "black"
    },
    typography: {
      "fontFamily": `"simplifica", sans-serif`,
      "fontSize": 50,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      textAlign:"center",
      width: "100%",
      height: "80%",
      display: "flex",
      justifyContent: "center"
      
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
        <AppBar position="static"
        style={{background: 'transparent', boxShadow: 40}}
        classes={{ 
          root: classes.abRoot, 
        }}>
          <CssBaseline />
          <Toolbar>
        <BasicModal/>
        
            <Typography variant="h5" className={classes.typography}
            >
              Master Word
            </Typography>
            <IconButton onClick={handleOpen}
          color="inherit"><RestartAltIcon/></IconButton>
            <BasicModal2/>
          </Toolbar>
        </AppBar>
      );
    }
export default NavBar;
    
