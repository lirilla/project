import * as CatsConstants from '../constants/CatConstants';

export const CatActions = {
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
    }
}
