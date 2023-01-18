import { getBackgrounds } from "./backgroundsSlice";

export const backgroundThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/883db6aebf765fa6618840b850bfb6f0/raw/3bbdba8cd49e8f193c819afc9d2a8c4204ada46d/BackgroundWeatherApp", {method: 'get'})
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