import { FETCH_REFDATA } from './types';

let fetchRefData = () => dispatch => {
    // let url = `http://localhost:8000/api/v1/items`;
    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => dispatch({
    //         type: FETCH_ITEMS,
    //         payload: res.data
    //     }))
    dispatch({
        type: FETCH_REFDATA,
        payload: []
    })
}
export default fetchRefData;