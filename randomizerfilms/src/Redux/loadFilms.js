import { getFilms, updateLoadState } from "./filmsSlice";


export const loadFilms = (dispatch) => {
    dispatch(updateLoadState({ loadState: 1 }));
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/fa0d16adc01043d44e5e374f9bb7bfd8/raw/3e5f068ff8526cb19877f23279945311596ec9fb/FilmsArray",
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