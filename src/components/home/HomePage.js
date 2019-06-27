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

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedBusinessType : [],
            businessName : '',
        }
    }

    onBuisnessTypeChange = (event) => {
        this.setState({selectedBusinessType: event.target.value});
        //update the prop value 
    };

    handleBusinessNameChange = (event) => {
        this.setState({businessName: event.target.value})
    };

    handleBusinessZipCodeChange = (event) => {
        this.setState({businessZipCode: event.target.value})
    }

    render() {
        return(
            <Card>
              <p className={this.props.classes.welcomeText} >Welcome to QMEHUB</p>
              <CardContent className={this.props.classes.textAlignCenter}>
                  <p className={this.props.classes.marginTop0}>Find Business</p>
                  <Grid container spacing={12}>
                    <Grid item xs={3}/>
                    <Grid item xs={2}>
                        <FormControl className={this.props.classes.formControl}>
                        <InputLabel htmlFor="businessType">Business Type</InputLabel>
                        <Select 
                            id="businessType"
                            onChange={this.onBuisnessTypeChange}  
                            value={this.state.selectedBusinessType}
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
                            value={this.state.businessName}
                            onChange={this.handleBusinessNameChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label="Business Zip Code"
                            value={this.state.businessZipCode}
                            onChange={this.handleBusinessZipCodeChange}
                        />
                    </Grid>
                    <Grid item xs={3}/>
                  </Grid>
              </CardContent>
              <div className={this.props.classes.actionGroup}>
                  <CardActions>
                    <Button variant="contained" color="primary" onClick={() => this.props.history.push("/businesses")}>Search</Button>
                  </CardActions>
              </div>
          </Card>
        )
    }
}

HomePage.propTypes = {

}
export default HomePage;