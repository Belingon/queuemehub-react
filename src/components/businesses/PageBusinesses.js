import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubHeader from '@material-ui/core/ListSubHeader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from "@material-ui/core/Grid";
import BusinessFilter from './BusinessFilter';

class PageBusinesses extends Component { 

    componentDidMount() {
        this.props.fetchBusinesses(this.props.businessFilter);
    };

    componentDidUpdate(prevProps) {
        if(this.props.businessFilter !== prevProps.businessFilter) {
            this.props.fetchBusinesses(this.props.businessFilter)
        }
    };

    render() {
        return (
            <Grid container style={{display: 'flex', flexGrow: 1}}>
                <Grid item xs={9}>
                    <h1>Businesses</h1>
                    <GridList cellHeight={250} className={this.props.classes.gridList}>
                        <GridListTile key="header" cols={4} style={{height: 'auto'}}>
                            <ListSubHeader component="div">Businesses</ListSubHeader>
                        </GridListTile>
                        {this.props.businesses.map(tile => (
                            <GridListTile key={tile.name}>
                                <img src={tile.img} alt={tile.name}/>
                                <GridListTileBar
                                    title={tile.name}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton>
                                            <InfoIcon onClick={() => console.log("need to open slider up")}/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile> 
                        ))}
                    </GridList>
                </Grid>
                <Grid item xs={3}>
                    <BusinessFilter 
                        businessFilter={this.props.businessFilter}
                        updateBusinessFilter={this.props.updateBusinessFilter}
                        filterDirection="column"
                    />
                </Grid>
            </Grid>
        )
    }
}

PageBusinesses.propTypes = {
    businesses: PropTypes.array.isRequired,
    businessFilter: PropTypes.object.isRequired,
    fetchBusinesses: PropTypes.func.isRequired
}
export default PageBusinesses;