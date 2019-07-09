import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BusinessesGrid from './BusinessesGrid';
import BusinessInfo from './BusinessInfo';

class PageBusinesses extends Component { 

    constructor(props){
        super(props);
        this.state={
            isBusinessSelected: false
        }
    }

    updateSelectedBusiness = (selectedBusiness) => {
        selectedBusiness ? 
        this.setState({isBusinessSelected: true}):
        this.setState({isBusinessSelected: false})
        this.props.updateBusiness(selectedBusiness);
    }

    render() {
        return (
            <div>
                {this.state.isBusinessSelected ?  
                (<BusinessInfo 
                    business={this.props.business}
                    updateBusiness={this.props.updateBusiness}
                    updateSelectedBusiness={this.updateSelectedBusiness}
                />) :
                (<BusinessesGrid 
                    businesses={this.props.businesses}
                    businessFilter={this.props.businessFilter}
                    fetchBusinesses={this.props.fetchBusinesses}
                    updateSelectedBusiness={this.updateSelectedBusiness}
                />)}
            </div>
        )
    }
}

PageBusinesses.propTypes = {
    business: PropTypes.object.isRequired,
    businesses: PropTypes.array.isRequired,
    businessFilter: PropTypes.object.isRequired,
    fetchBusinesses: PropTypes.func.isRequired,
    updateBusiness: PropTypes.func.isRequired,
}
export default PageBusinesses;