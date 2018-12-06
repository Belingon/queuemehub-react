import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from "@material-ui/core/Grid";

import bearmeme from './bearmeme.jpg';
import images from './images.jpg';
import meme from './meme.jpg';

const styles = theme => ({
    gridList: {
        overflowY: 'scroll',
        maxHeight: 800
      }
});

const tileData = [
    {
        img: bearmeme,
        name: 'West Street Service Center',
        description: 'full service garage',
        city: 'gardner'
    },
    {
        img: images,
        name: 'This is a test',
        description: 'testing description',
        city: 'leominster'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },
    {
        img: bearmeme,
        name: 'West Street Service Center',
        description: 'full service garage',
        city: 'gardner'
    },
    {
        img: images,
        name: 'This is a test',
        description: 'testing description',
        city: 'leominster'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },
    {
        img: bearmeme,
        name: 'West Street Service Center',
        description: 'full service garage',
        city: 'gardner'
    },
    {
        img: images,
        name: 'This is a test',
        description: 'testing description',
        city: 'leominster'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },
    {
        img: bearmeme,
        name: 'West Street Service Center',
        description: 'full service garage',
        city: 'gardner'
    },
    {
        img: images,
        name: 'This is a test',
        description: 'testing description',
        city: 'leominster'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },   {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },
    {
        img: bearmeme,
        name: 'West Street Service Center',
        description: 'full service garage',
        city: 'gardner'
    },
    {
        img: images,
        name: 'This is a test',
        description: 'testing description',
        city: 'leominster'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },   {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    },
    {
        img: bearmeme,
        name: 'West Street Service Center',
        description: 'full service garage',
        city: 'gardner'
    },
    {
        img: images,
        name: 'This is a test',
        description: 'testing description',
        city: 'leominster'
    },
    {
        img: meme,
        name: 'Lord Of The Rings',
        description: 'Best novels ever',
        city: 'middle earth'
    }
]
    
class PageBusinesses extends Component{ 

    render() {
        return (
            <Grid container spacing={12} style={{display: 'flex'}}>
                <Grid item xs={8}>
                    <h1>Businesses</h1>
                    <GridList cols={4} cellHeight={250} className={this.props.classes.gridList}>
                        {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.name}/>
                                <GridListTileBar
                                    title={tile.name}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                        </GridListTile> 
                        ))}
                    </GridList>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={3}>
                    <p>Soon To Be Filter For Businesses!</p>
                </Grid>
            </Grid>
        )
    }
}

PageBusinesses.propTypes = {

}

export default withStyles(styles)(PageBusinesses);