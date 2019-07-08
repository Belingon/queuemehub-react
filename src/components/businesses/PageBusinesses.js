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
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import FilterList from '@material-ui/icons/FilterList';
import {green} from '../theme/colors';
import Drawer from '@material-ui/core/Drawer';

class PageBusinesses extends Component { 

    constructor(props){
        super(props);
        this.state = {
            isFilterDrawerOpen: false
        }
    };

    componentDidMount() {
        this.props.fetchBusinesses(this.props.businessFilter);
    };

    componentDidUpdate(prevProps) {
        if(this.props.businessFilter !== prevProps.businessFilter) {
            this.props.fetchBusinesses(this.props.businessFilter)
        }
    };

    onFilter = (businessFilter) => {
        this.props.updateBusinessFilter(businessFilter);
        this.onFilterDrawerClose();
    };

    onFilterDrawerClick = () => {
        this.setState({isFilterDrawerOpen: true})
    };

    onFilterDrawerClose = () => {
        this.setState({isFilterDrawerOpen: false})
    };

    onTileClick = (tile) => {
        console.log("Should be opening business up")
        console.log(tile)
    };

    render() {
        return [(
            <Grid container style={{display: 'flex', flexGrow: 1}} key= 'businessGrid'>
                <Grid item xs={12} >
                        <Toolbar className={this.props.classes.toolbar}>
                            <p className={this.props.classes.title}>Businesses</p>
                            <div onClick={this.onFilterDrawerClick}>
                            <FilterList style={{color:green}}/>
                            </div>
                        </Toolbar>
                    <GridList cols={4} cellHeight={250} spacing={6} className={this.props.classes.gridList}>
                        {this.props.businesses.map(tile => (
                            <GridListTile key={tile.id} style={{marginTop: 10, marginBottom: 10}} onClick={() => this.onTileClick(tile)}>
                                <img src={tile.img} alt={tile.name}/>
                                <GridListTileBar
                                    title={tile.name}
                                    subtitle={<span>{tile.description}</span>}
                                    actionIcon={
                                        <IconButton>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile> 
                        ))}
                    </GridList>
                </Grid>
        </Grid>),
        (<Drawer
            key= 'businessFilterDrawer'
            anchor = 'right'
            open = {this.state.isFilterDrawerOpen}
            onClose = {this.onFilterDrawerClose}
          >
            <BusinessFilter 
                businessFilter={this.props.businessFilter}
                onFilter={this.onFilter}
            />
          </Drawer>
        )]
    }
}

PageBusinesses.propTypes = {
    businesses: PropTypes.array.isRequired,
    businessFilter: PropTypes.object.isRequired,
    fetchBusinesses: PropTypes.func.isRequired
}
export default PageBusinesses;