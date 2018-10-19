import { FETCH_REF_ABOUT_HISTORY_DATA, FETCH_REF_ABOUT_TEAM_DATA, FETCH_REF_ABOUT_PARISH_DATA } from './types';
import fire from "../config/firebase";
let fetchAboutUsData = (type) => dispatch => {
    let _refType = fetchRefType(type);
    fire.database().ref(`referenceData/aboutus/${_refType}`).on('value', (snapshot) => {
        console.log(snapshot.val())
        dispatch({
            type: type,
            payload: snapshot.val()
        })
    });
}
function fetchRefType(val) {
    let result;
    switch (val) {
        case 'FETCH_REF_ABOUT_HISTORY_DATA':
            result = 'history';
            break;
        case 'FETCH_REF_ABOUT_TEAM_DATA':
            result = 'team';
            break;
        case 'FETCH_REF_ABOUT_PARISH_DATA':
            result = 'parish';
            break;
        default:
            result = 'team';
            break;
    }
    return result;
}
export default fetchAboutUsData;