import { getFilms } from "./filmsSlice";


export const loadFilms = (dispatch) => {
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
            dispatch(getFilms({ filmsArray: data }));
        })
        .catch(error => {
            alert("Type error: " + error);
    }) 
}