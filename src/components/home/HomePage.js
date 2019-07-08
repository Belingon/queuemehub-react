import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import BusinessFilter from '../businesses/BusinessFilter';

class HomePage extends Component {

  onFilter = (businessFilter) => {
    this.props.updateBusinessFilter(businessFilter);
    this.props.history.push("/businesses");
  }

    render() {
        return(
            <Card>
              <p className={this.props.classes.welcomeText} >Welcome to QMEHUB</p>
              <CardContent className={this.props.classes.textAlignCenter}>
                <BusinessFilter 
                    businessFilter={this.props.businessFilter}
                    onFilter={this.onFilter}
                    hasClearButton={false}
                />
              </CardContent>
          </Card>
        )
    }
}

HomePage.propTypes = {
    businessFilter: PropTypes.object.isRequired,
    updateBusinessFilter: PropTypes.func.isRequired
}
export default HomePage;