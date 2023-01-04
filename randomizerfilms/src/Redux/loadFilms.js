import { getFilms, updateLoadState } from "./filmsSlice";


export const loadFilms = (dispatch) => {
    dispatch(updateLoadState({ loadState: 1 }));
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/fa0d16adc01043d44e5e374f9bb7bfd8/raw/8b7074e65ceeaf8a47a8aed74dc8c1ba1b2166f8/FilmsArray",
        {
            method: 'get',
            headers: {
                "Accept": "application/json",
            },
        }
    )
        .then(response => {
            if (!response.ok) {
                alert("Error with connection");
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            dispatch(updateLoadState({ loadState: 2 }));
            dispatch(getFilms({ filmsArray: data }));
        })
        .catch(error => {
            dispatch(updateLoadState({ loadState: 3 }));
            alert("Type error: " + error);
    }) 
}