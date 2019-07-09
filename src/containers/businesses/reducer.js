import * as actions from '../../constants/actions';
import Restaurant from '../../components/businesses/Restaurant.svg';
import Garage from '../../components/businesses/Garage.svg';
import Salon from '../../components/businesses/Salon-Barber.svg';

const init_state = {
    businessFilter: {
        type: '',
        name: '',
        zipCode: ''
    },
    businesses: []
};

const businesses = (state = init_state, action) => {
    switch (action.type) {
        case actions.UPDATE_BUSINESS_FILTER:
            return {
                ...state,
                businessFilter : action.businessFilter
            }
        case actions.FETCH_BUSINESSES_SUCCESS:
            let filteredTileData = tileData.filter(tile => state.businessFilter.type ? tile.type === state.businessFilter.type : true);
            return {
                ...state,
                businesses : filteredTileData
            }
        case actions.UPDATE_BUSINESS:
            return {
                ...state,
                business : action.business
            }
        default:
        return state;
    }
}

export default businesses;

const tileData = [
    {
        img: Garage,
        id: 0,
        name: 'West Street Service Center',
        description: 'Full service garage',
        city: 'gardner',
        type: 'garage',
        inspectionWaitTime: 0
    },
    {
        img: Restaurant,
        id: 1,
        name: 'This is a test',
        description: 'Testing Description',
        city: 'Leominster',
        type: 'restaurant',
        inspectionWaitTime: 0
    },
    {
        img: Salon,
        id: 2,
        name: 'Lord Of The Rings',
        description: 'Best Novels Ever',
        city: 'Middle Earth',
        type: 'barber',
        inspectionWaitTime: 0
    }
]