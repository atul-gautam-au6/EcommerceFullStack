import React from 'react'
import { AppBar, Toolbar, Grid ,Typography, IconButton,InputBase} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme=>({
   
    backgroundColor:{
        background:"white",
        border:'0.01px solid rgb(255, 115, 0) '
    },
    IconButtonColor:{
        color:"rgb(255, 115, 0)"
    },
    root:{

        "& .MuiSvgIcon-root:hover":{
            color:"rgb(255, 115, 0)"
        }
    },
    SearchInput:{
        opacity:"1",
        padding:`0px {theme.spacing(1)}px`,
        fontSize:"0.8rem",
        '&:hover':{
            color:'rgb(255, 115, 0)'
        },
        '& .MuiSvgIcon-root':{
            marginRight:`{theme.spacing(1)}`
        }        
    },
}))

const Headers = () => {
    const classes = useStyle()
    return (
       <AppBar position="sticky"  className={classes.backgroundColor}>  
           <Toolbar>
                <Grid container className={classes.root} alignItems="center">
                    <Grid item >
                        <IconButton >
                            <MenuIcon  />                          
                        </IconButton>
                    </Grid>
                   
                    <Grid item >
                        <Typography variant="h5" className={classes.IconButtonColor}>Amazonna</Typography>
                       
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <InputBase 
                            placeholder="Search"
                            className={classes.SearchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                        
                    <Grid item >
                       <IconButton >
                           <PowerSettingsNewIcon />
                       </IconButton>
                    </Grid>
                </Grid>
           </Toolbar>
       </AppBar>

    )
}

export default Headers
