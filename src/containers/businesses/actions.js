import * as actions from '../../constants/actions'

export const updateBusinessFilter = businessFilter => ({
    type: actions.UPDATE_BUSINESS_FILTER,
    businessFilter
});

export const fetchBusinesses = () => dispatch => {
    dispatch(fetchBusinessesSuccess());
}

const fetchBusinessesSuccess = () => ({
    type: actions.FETCH_BUSINESSES_SUCCESS,
})

export const resetBusinessFilter = () => ({
    type: actions.RESET_BUSINESS_FILTER
})