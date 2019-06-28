import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubHeader from '@material-ui/core/ListSubHeader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
        minWidth: 200
    },
    marginTop0: {
        marginTop: 0
    }
  });

class BusinessFilter extends Component { 

    updateFilter = (field, value) => {
        let newBusinessFilter = Object.assign({}, this.props.businessFilter);
        newBusinessFilter[field] = value;
        this.props.updateBusinessFilter(newBusinessFilter);
    };

    render() {
        return (
            <div>
                <p className={this.props.classes.marginTop0}>Find Business</p>
                  <Grid container direction={this.props.filterDirection} style={{flexGrow: 1}}>
                  <Grid item xs={3}/>
                    <Grid item xs={2}>
                        <FormControl className={this.props.classes.formControl}>
                        <InputLabel htmlFor="businessType">Business Type</InputLabel>
                        <Select 
                            id="businessType"
                            onChange={(event) => this.updateFilter('type', event.target.value)}  
                            value={this.props.businessFilter.type}
                        >
                            <MenuItem value={'garage'}>
                                Garage
                            </MenuItem>
                            <MenuItem value={'barber'}>
                                Salon/Barber
                            </MenuItem>
                            <MenuItem value={'restaurant'}>
                                Restaurant
                            </MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Business Name"
                            value={this.props.businessFilter.name}
                            onChange={(event) => this.updateFilter('name', event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Business Zip Code"
                            value={this.props.businessFilter.zipCode}
                            onChange={(event) => this.updateFilter('zipCode', event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}/>
                  </Grid>
            </div>
        )
    }
}

BusinessFilter.propTypes = {
    businessFilter: PropTypes.object.isRequired,
    updateBusinessFilter: PropTypes.func.isRequired,
    filterDirection: PropTypes.string.isRequired
}
BusinessFilter.defaultProps = {
    filterDirection: 'row'
  }
export default withStyles(styles)(BusinessFilter);