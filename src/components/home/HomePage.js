import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
      minWidth: 200
    },
    welcomeText: {
        textAlign: 'center', 
        paddingTop: 50, 
        fontSize: 'large'
    },
    actionGroup: {
        display: 'flex', 
        justifyContent:'center', 
        paddingTop: 20, 
        paddingBottom:20
    },
    textAlignCenter: {
        textAlign:'center'
    },
    marginTop0: {
        marginTop: 0
    }
  });

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedBuisnessType : [],
            buisnessName : '',
        }
    }

    onBuisnessTypeChange = (event) => {
        this.setState({selectedBuisnessType: event.target.value});
        //update the prop value 
    };

    handleBuisnessNameChange = (event) => {
        this.setState({buisnessName: event.target.value})
    };

    handleBuisnessZipCodeChange = (event) => {
        this.setState({buisnessZipCode: event.target.value})
    }

    render() {
        return(
            <Card>
              <p className={this.props.classes.welcomeText} >Welcome to QMEHUB</p>
              <CardContent className={this.props.classes.textAlignCenter}>
                  <p className={this.props.classes.marginTop0}>Find Buisness</p>
                  <Grid container spacing={12}>
                    <Grid item xs={3}/>
                    <Grid item xs={2}>
                        <FormControl className={this.props.classes.formControl}>
                        <InputLabel htmlFor="buisnessType">Buisness Type</InputLabel>
                        <Select 
                            id="buissnesType"
                            onChange={this.onBuisnessTypeChange}  
                            value={this.state.selectedBuisnessType}
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
                            label="Buisness Name"
                            value={this.state.buisnessName}
                            onChange={this.handleBuisnessNameChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Buisness Zip Code"
                            value={this.state.buisnessZipCode}
                            onChange={this.handleBuisnessZipCodeChange}
                        />
                    </Grid>
                    <Grid item xs={3}/>
                  </Grid>
              </CardContent>
              <div className={this.props.classes.actionGroup}>
                  <CardActions>
                    <Button variant="contained" color="primary">Search</Button>
                  </CardActions>
              </div>
          </Card>
        )
    }
}

HomePage.propTypes = {
    otherValue: PropTypes.string.isRequired
}
export default withStyles(styles)(HomePage);