import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BookMarkIcon from '@material-ui/icons/Bookmark';
import  IconButton from '@material-ui/core/IconButton';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip'; 
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import FullScreenIcon from '@material-ui/icons/Fullscreen'; 


const useStyles = makeStyles({
    playerWrapper:{
        width:"100%",
        position:"relative",
    },

    controlsWrapper: {
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        background:"rgabe(0,0,0,0.6)",
        display:"flex",
        justifyContent:"space-between",
        zIndex:1,

    },
    
    controlIcons:{
        color:"#777",
        fontSize:50,
        transform:"scale(0.9)",
        "&:hover":{
            color:'#fff',
            transform:"scale(1)",
        },
    },


    bottomIcons:{
        color:"#999",
        "&:hover":{
            color:"#fff",
        },
    },

    volumeSlider :{
        width:100,

    },
});
function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
const PrettoSlider = withStyles({
    root: {
      color:'pink',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
function Songs() {
    const classes = useStyles();

    return  <>
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">React Video Player</Typography>

        </Toolbar>

    </AppBar>
    <Toolbar />
        <Container maxWidth="md">
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                    width="100%"
                    height="100%"
                        url="https://youtu.be/EDpp3tPzATY"
                        muted={false}
                        playing={true}
                    />
                    <div className={classes.controlsWrapper}>
                        {/* Top controls */}
                            <Grid container direction = "row" alignItems="center" justify="space-between" style={{padding:16}}>
                                <Grid item>
                                    <Typography variant="h5" style={{color:"#fff"}}>Video Title</Typography>


                                </Grid>

                                <Grid item>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<BookMarkIcon/>}
                                    >
                                        
                                        BookMark
                                    </Button>

                                </Grid>

                            </Grid>


                                {/* middle controls */}
                                <Grid container direction="row" alignItems="center" justify="center">
                                    <IconButton
                                    className={classes.controlIcons}
                                    aria-label="reqind"
                                    >
                                        <FastRewindIcon fontSize="inherit"/>
                                    </IconButton>

                                    <IconButton
                                    className={classes.controlIcons}
                                    aria-label="reqind"
                                    >
                                        <PlayArrowIcon fontSize="inherit"/>
                                    </IconButton>

                                    <IconButton
                                    className={classes.controlIcons}
                                    aria-label="reqind"
                                    >
                                        
                                        <FastForwardIcon fontSize="inherit"/>
                                    </IconButton>

                                </Grid>

                                {/*bottom controls */}
                                <Grid container direction="row" justify="space-between" alignItems="center" style={{padding:16}}>
                                    <Grid item xs={12}>
                                        <PrettoSlider
                                        min={0}
                                        max={100}
                                        defaultValue={20}
                                        ValueLabelComponent={ValueLabelComponent}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Grid container alignItems="center" direction="row">
                                            <IconButton className={classes.bottomIcons}>
                                                <PlayArrowIcon fontSize="large"/>
                                            </IconButton>

                                            <IconButton className={classes.bottomIcons}>
                                                <VolumeUpIcon fontSize="large"/>
                                            </IconButton>

                                            <slider
                                            min={0}
                                            max={100}
                                            defaultValue={100}
                                            className={classes.volumeSlider}
                                            />
                                            <Button
                                             variant="text"
                                             style={{color:"#fff",marginLeft:16}}
                                            >
                                                <Typography>05:05</Typography>
                                                
                                            </Button>
                                        </Grid>

                                        </Grid>
                                        <Grid item>
                                            <Button variant="text" className={classes.bottomIcons}> 
                                                <Typography>1X</Typography>
                                            </Button>
                                            <IconButton></IconButton>
                                    </Grid>


                                </Grid>




                    </div>
                </div>

        </Container>

    </> 

}
export default Songs;

