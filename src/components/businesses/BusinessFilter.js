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
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    formControl: {
        minWidth: 200
    },
    marginTop0: {
        marginTop: 0
    }
  });

class BusinessFilter extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          businessFilter: this.props.businessFilter 
        }
    }

    updateFilter = (field, value) => {
        let newBusinessFilter = Object.assign({}, this.state.businessFilter);
        newBusinessFilter[field] = value;
        this.setState({businessFilter: newBusinessFilter});
    };

    onFilterApply = () => {
        this.props.onFilter(this.state.businessFilter);
    };

    onClearFilter = () => {
        this.setState({businessFilter: {
            type: '',
            name: '',
            zipCode: ''
        }})
    };

    render() {
        return (
            <div style={{display:'flex', flexDirection: 'column', padding: 10}}>
                <h2>Find Business</h2>
                <Divider className={this.props.classes.dividerStyle}/>
                <div>
                    <FormControl className={this.props.classes.formControl}>
                        <InputLabel htmlFor="businessType">Business Type</InputLabel>
                        <Select
                            id="businessType"
                            onChange={(event) => this.updateFilter('type', event.target.value)}  
                            value={this.state.businessFilter.type}
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
                </div>
                <div>
                    <TextField
                        label="Business Name"
                        value={this.state.businessFilter.name}
                        onChange={(event) => this.updateFilter('name', event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label="Business Zip Code"
                        value={this.state.businessFilter.zipCode}
                        onChange={(event) => this.updateFilter('zipCode', event.target.value)}
                    />
                </div>
                <div style={{marginBottom: 10, marginTop: 20, display: 'flex', justifyContent: this.props.hasClearButton ? 'space-between': 'center'}}>
                    <Button onClick={this.onFilterApply} variant="contained" color="primary" style={{width: 100, marginRight: 10}}>Search</Button>
                    {this.props.hasClearButton ? (<Button onClick={this.onClearFilter} variant="contained" style={{width: 100}}>Clear</Button>) : null}
                </div>
            </div>
        )
    }
}

BusinessFilter.propTypes = {
    businessFilter: PropTypes.object.isRequired,
    onFilter: PropTypes.func.isRequired,
    filterDirection: PropTypes.string.isRequired,
    resetBusinessFilter: PropTypes.func.isRequired,
    hasClearButton: PropTypes.bool,
}
BusinessFilter.defaultProps = {
    filterDirection: 'row',
    hasClearButton: true
  }
export default withStyles(styles)(BusinessFilter);