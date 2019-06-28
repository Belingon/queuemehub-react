import * as actions from '../../constants/actions';

const init_state = {
    user: {},
};

const app = (state = init_state, action) => {
    switch (action.type) {
        case actions.UPDATE_USER:
          return {
              ...state,
              user : action.userInformation
          };
        default:
            return state;
    }
}

export default app;