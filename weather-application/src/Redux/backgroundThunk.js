import { getBackgrounds } from "./backgroundsSlice";

export const backgroundThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/883db6aebf765fa6618840b850bfb6f0/raw/7274e846d71997f456110a1e1c074d68072e2093/BackgroundWeatherApp", {method: 'get'})
    .then(response => {
        if(!response.ok) {
            alert("Error with download");
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        dispatch(getBackgrounds(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}