import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpIcon from '@mui/icons-material/Help';
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';
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
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 2.5,
    overflow:'scroll',
    height:'95%',
    //display:'block'
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
      "fontSize": 40,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      textAlign:"center",
      width: "100%",
      //height: "80%",
      display: "flex",
      justifyContent: "center"
      
   },
   typography3: {
    "fontFamily": `"simplifica", sans-serif`,
    "fontSize": 25,
    }
}
)
);

  export default function InstructionModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
          <IconButton onClick={handleOpen}
          color="inherit"><HelpOutlineIcon/></IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.typography2}>
                How to Play
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography3}>
                Guess the English word in 10 tries
                <br/>
                Our system has randomly picked a commonly used word for you from the English lexicon.
                Enter your guess in the given space and press "Submit" button.
              </Typography>
              <br/>
              <Button
          variant="contained"
  
          
          style={{
            color:"white",
            backgroundColor:" var(--color-purple)",
            fontWeight: 800,
            //boxShadow: "1px 1px 7px var(--color-purple)",
            display : "flex",
            justifyContent:"center",
            
          }}
        >
          Submit
          
        </Button>
        <br/>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography3}>
                After every guess, your guess will come up on the screen. If there is/are yellow tick(s) in front on your guess, 
                that would mean that there are some alphabets in your guess, which are correctly guessed, but are wrongly placed. 
                For example, if the word is 'sleep' and you guess 'peace', there will be 2 yellow ticks corresponding to 'p' and 'e' 
                which exist in both the word and your guess, but are differently placed.
              </Typography>
              <br/>
              <div>
              {" "}
              <CheckBoxRoundedIcon
                style={{
                  color: "var(--color-ok)",
                  margin: 2,
                  boxShadow: "1px 1px 7px var(--color-ok) inset",
                }}
              />{" "}
            </div>
            <br/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography3}>
                With the yellow ticks, our system will also tell you what alphabets in your guess are correctly guessed 
                AND correctly placed as well with respect to the original word, using green tick(s). For example, if the word is 'peach', and your guess is 'phase', 2 green ticks will
                be displayed next to your guess for 'p' and 'a', with 2 yellow ticks for 'h' and 'e', since they are present in both your guess and the original word, but are wrongly placed
                unlike 'p' and 'a', which are correctly placed.
              </Typography>
              <br/>
              <div>
              {" "}
              <CheckBoxRoundedIcon
                style={{
                  color: "var(--color-success)",
                  margin: 2,
                  boxShadow: "1px 1px 7px var(--color-success) inset",
                }}
              />{" "}
            </div>
            <br/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography3}>
                If you exhaust all your tries, the word will be revealed to you and you can play again with a new word. 
                If you guess the word correctly, then congratualtions are in order 🎉🎉
              </Typography>
              <br/>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography3}>
                if you want to restart the game with a different word, press the restart icon
              </Typography>
              
              <IconButton 
          color="inherit"><RestartAltIcon/></IconButton>
          <br/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.typography3}>
                You can also change the length of the word selected and your guessed by clicking on the settings icon and selecting the length you want from the given options.
              </Typography>
              
              <IconButton 
          color="inherit"><SettingsIcon/></IconButton>
            </Box>
          </Modal>
        </div>
      );
    }