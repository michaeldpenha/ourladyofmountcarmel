import { FETCH_REF_SERVICES_DATA } from './types';
import fire from "../config/firebase";
let fetchServicesData = () => dispatch => {
    fire.database().ref('referenceData/services').on('value', (snapshot) => {
        dispatch({
            type: FETCH_REF_SERVICES_DATA,
            payload: snapshot.val()
        })
});
}
export default fetchServicesData;