import * as actions from '../../constants/actions'

export const updateUser = (userInformation) => ({
    type: actions.UPDATE_USER,
    userInformation
});
