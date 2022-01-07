import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
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
import InstructionModal from "../Modal/InstructionModal.js";
import SettingsModal from "../Modal/SettingsModal.js";

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
      "fontSize": 60,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      textAlign:"center",
      width: "100%",
      height: "80%",
      display: "flex",
      justifyContent: "center",
      marginTop: 20,
   },
}
)
);

function NavBar({ length, setLength }) {
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
              <InstructionModal />
          
              <Typography variant="h5" className={classes.typography}
              >
                Master Word
              </Typography>
              <IconButton onClick={() => window.location.reload()}
                color="inherit"><RestartAltIcon/></IconButton>
              <SettingsModal length={length} setLength={setLength} />
            </Toolbar>
        </AppBar>
      );
    }
export default NavBar;
    
