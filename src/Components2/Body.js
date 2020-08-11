import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display:"flex",
      flexWrap: 'wrap',

    },
    media: {
      height: 140,
    },
  });
const Body = () => {
    const classes=useStyles()
    return (<>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41G79+ArE0L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41G79+ArE0L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41G79+ArE0L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41G79+ArE0L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41G79+ArE0L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
        <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41G79+ArE0L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
        </Card></>
    )
}

export default Body
