import { getBackgrounds } from "./backgroundsSlice";

export const backgroundThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/883db6aebf765fa6618840b850bfb6f0/raw/4e6ddec5216da5c016f5f126d3f2d3b1fc7db95d/BackgroundWeatherApp", {method: 'get'})
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