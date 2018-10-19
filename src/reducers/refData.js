import {
    FETCH_REF_SIDEBAR_DATA, FETCH_REF_TESTIMONAL_DATA, FETCH_REF_SERVICES_DATA,
    FETCH_REF_ABOUT_HISTORY_DATA,FETCH_REF_ABOUT_PARISH_DATA,FETCH_REF_ABOUT_TEAM_DATA
} from '../actions/types';

const initialState = {
    sidebar: {},
    testimonal: [],
    services: [],
    history: [],
    team: [],
    parish: []
}
const items = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REF_SIDEBAR_DATA: return {
            ...state,
            sidebar: action.payload
        }
        case FETCH_REF_TESTIMONAL_DATA: return {
            ...state,
            testimonal: action.payload
        }
        case FETCH_REF_SERVICES_DATA: return {
            ...state,
            services: action.payload
        }
        case FETCH_REF_ABOUT_HISTORY_DATA: return {
            ...state,
            history: action.payload
        }
        case FETCH_REF_ABOUT_PARISH_DATA: return {
            ...state,
            parish: action.payload
        }
        case FETCH_REF_ABOUT_TEAM_DATA: return {
            ...state,
            team: action.payload
        }
        default: return state;
    }
}

export default items;