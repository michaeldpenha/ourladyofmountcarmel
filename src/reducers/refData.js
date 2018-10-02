import {FETCH_REF_SIDEBAR_DATA,FETCH_REF_TESTIMONAL_DATA} from '../actions/types';

const initialState = {
    sidebar : {},
    testimonal : []
}
const items = (state = initialState , action) => {
    switch(action.type){
        case FETCH_REF_SIDEBAR_DATA : return {
            ...state,
            sidebar : action.payload
        }
        case FETCH_REF_TESTIMONAL_DATA : return {
            ...state,
            testimonal : action.payload
        }
        default : return state;
    }
}

export default items;