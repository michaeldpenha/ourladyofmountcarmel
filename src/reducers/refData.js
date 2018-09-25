import {FETCH_REF_SIDEBAR_DATA} from '../actions/types';

const initialState = {
    sidebar : {}
}
const items = (state = initialState , action) => {
    switch(action.type){
        case FETCH_REF_SIDEBAR_DATA : return {
            ...state,
            sidebar : action.payload
        }
        default : return state;
    }
}

export default items;