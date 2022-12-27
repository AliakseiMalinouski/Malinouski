import { loadArrayItems } from "../Redux/itemsSlice";


export const LoadData = (dispatch) => {
    let url = "https://gist.githubusercontent.com/AliakseiMalinouski/16cd68b98a0e568dadbcf4b5c29ab385/raw/52628a8c7975710ed3f912c5596e8c951c266a31/BreakingBadBaseArray"
    fetch(url, { method: 'get' })
        .then(response => {
            if (!response.ok) {
                alert("error with connection");
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            dispatch(loadArrayItems({ data: data }));
        })
        .catch(error => alert('Error with connection'));
}