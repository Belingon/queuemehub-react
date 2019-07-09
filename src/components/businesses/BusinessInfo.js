import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {green, neutralWhite} from '../theme/colors';
import { withStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/keyboardBackspace';

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

class BusinessInfo extends Component { 

    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
    };

    componentDidMount() {

    };

    componentDidUpdate(prevProps) {

    };

    onBack = () => {
        this.props.updateSelectedBusiness(null);
    };

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        action={<Button variant="contained" color="primary" onClick={this.onBack}><BackIcon/> Go Back</Button>}
                    />
                    <p className={this.props.classes.welcomeText}>{this.props.business.name}</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={this.props.business.img} alt={this.props.business.name} style={{height: 100}}/>
                    </div>
                    <CardContent className={this.props.classes.textAlignCenter}>
                        <p>Inspection Wait Time: {this.props.business.inspectionWaitTime} Minutes</p>
                        <TextField
                            label="Your Name"
                            value={this.state.userName}
                            onChange={(event) => this.setState({userName: event.target.value})}
                        />
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'center', paddingBottom: 20}}>
                        <Button variant="contained" color="primary" >Check In!</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

BusinessInfo.propTypes = {
    business: PropTypes.object.isRequired,
    updateBusiness: PropTypes.func.isRequired,
    updateSelectedBusiness: PropTypes.func.isRequired
}
export default withStyles(styles)(BusinessInfo);