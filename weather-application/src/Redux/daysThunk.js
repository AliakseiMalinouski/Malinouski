import { getDate } from "./dateSlice";

export const daysThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/13041874779a4f329c0b7770ba462022/raw/70c1c449e352dca9b62f79cff5ed71d279fc95e0/DaysArrayWeatherApp")
    .then(response => {
        if(!response.ok) {
            alert("Error with download");
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        dispatch(getDate({days: data}));
    })
    .catch(error => {
        alert("Error with download");
    })
}