import {FETCH_REFDATA} from '../actions/types';

const initialState = {
    items : []
}
const items = (state = initialState , action) => {
    switch(action.type){
        case FETCH_REFDATA : return {
            ...state,
            items : action.payload
        }
        default : return state;
    }
}

export default items;