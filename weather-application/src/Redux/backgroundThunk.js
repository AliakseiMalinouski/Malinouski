import { getBackgrounds } from "./backgroundsSlice";

export const backgroundThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/883db6aebf765fa6618840b850bfb6f0/raw/38e6a0a29b3eb2dcedb5384d3fc6f3f4678c2dc7/BackgroundWeatherApp", {method: 'get'})
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