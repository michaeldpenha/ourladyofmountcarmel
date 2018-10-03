import { FETCH_REF_TESTIMONAL_DATA } from './types';
import fire from "../config/firebase";
let fetchTestimonalData = () => dispatch => {
    fire.database().ref('referenceData/testimonals').on('value', (snapshot) => {
        dispatch({
            type: FETCH_REF_TESTIMONAL_DATA,
            payload: snapshot.val()
        })
});
}
export default fetchTestimonalData;