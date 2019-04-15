import * as CatsConstants from '../constants/CatConstants';
const uuidv1 = require('uuid/v1');

const catReducer = (state = [], action) => {
    switch (action.type) {
      case CatsConstants.ADD_CAT:
        return [
            ...state,
            {
              id: uuidv1(),
              name: action.payload.name
            }
          ];
      default:
        return state;
    }
  }
export default catReducer;