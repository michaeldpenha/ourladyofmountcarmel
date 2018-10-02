import { FETCH_REF_TESTIMONAL_DATA } from './types';
import fire from "../config/firebase";
let fetchTestimonalData = () => dispatch => {
    // let url = `http://localhost:8000/api/v1/items`;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => dispatch({
    //         type: FETCH_ITEMS,
    //         payload: res.data
    //     }))
    fire.database().ref('referenceData/testimonals').on('value', (snapshot) => {
        dispatch({
            type: FETCH_REF_TESTIMONAL_DATA,
            payload: snapshot.val()
        })
    //console.log(snapshot.val())
});
}

export default fetchTestimonalData;
//export default fetchTestimonalData;