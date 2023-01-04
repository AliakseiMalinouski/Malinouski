import { getFilms, updateLoadState } from "./filmsSlice";


export const loadFilms = (dispatch) => {
    dispatch(updateLoadState({ loadState: 1 }));
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/fa0d16adc01043d44e5e374f9bb7bfd8/raw/cb0419260faae0f1315517b122d6de8bcd1a2ba1/FilmsArray",
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