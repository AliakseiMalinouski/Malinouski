import { getTitles } from "./TitlesCatalogSlice";


export const titlesThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/5669c3fc181654a6cc0db37dc101c65f/raw/19795dacb3815f1c0cca4eeb524e1a1aeef2a283/TitlesMiniIlliBooks",
        {
            method: 'get'
        }
    )
        .then(response => {
            if (!response.ok) {
            alert('Error with connection')
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            dispatch(getTitles({ data: data }));
    })
}