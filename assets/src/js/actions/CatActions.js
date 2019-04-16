import * as CatsConstants from '../constants/CatConstants';

const CatActions = {
    getAllCats: () => {
        return {
            type: CatsConstants.GET_ALL_CATS,
            payload: cats
        }
    },

    addCat: (cat) => {
        return {
            type: CatsConstants.ADD_CAT,
            payload: cat
        }
    },

    removeCat: (cat) => {
        return {
            type: CatsConstants.REMOVE_CAT,
            payload: cat
        }
    }
}

export default CatActions;