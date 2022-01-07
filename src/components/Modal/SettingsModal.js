import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
import { borderRadius } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 2.5
  };

  const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#f1f1f1',
        color: 'black',
        '&:hover': {
          backgroundColor: '#0b0c10',
          color : 'white'
      },
    },
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
    typography2: {
      "fontFamily": `"simplifica", sans-serif`,
      "fontSize": 30,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      textAlign:"center",
      width: "100%",
      height: "80%",
      display: "flex",
      justifyContent: "center"
      
   },
   typography3: {
    "fontFamily": `"simplifica", sans-serif`,
    "fontSize": 16,
    justifyContent: "center",
    backgroundColor: '#f1f1f1',
        color: 'black',
        '&:hover': {
          backgroundColor: '#0b0c10',
          color : 'white'
        }
    },
    typography4: {
      "fontFamily": `"simplifica", sans-serif`,
      "fontSize": 20,
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

  export default function SettingsModal({length, setLength}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
          <IconButton onClick={handleOpen}
          color="inherit"><SettingsIcon/></IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              
              <Typography className={classes.typography2} id="modal-modal-description" sx={{ mt: 2 }} >
                Length of the word
                
              </Typography >
              <br/>
              <div style = {{display: "flex", justifyContent: "center"}}> 
                <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.typography2}>
                <Button variant="contained" className={[classes.button, classes.typography3]} onClick={() => setLength(3)}>
                  3
                </Button>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.typography2}>
                <Button className={[classes.button, classes.typography3]} onClick={() => setLength(5)} variant="contained">
                  5
                </Button>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.typography2}>
                <Button className={[classes.button, classes.typography3]} onClick={() => setLength(7)} variant="contained">
                  7
                </Button>
                </Typography>
              </div> 
              <div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography4}>
                  Current word length : {length}
                </Typography>
              </div>
            </Box>
          </Modal>
        </div>
      );
    }