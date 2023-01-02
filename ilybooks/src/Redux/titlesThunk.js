import { getTitles } from "./TitlesCatalogSlice";


export const titlesThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/5669c3fc181654a6cc0db37dc101c65f/raw/f161138f892eb20d4d0829f60a890d1f940a59c9/TitlesMiniIlliBooks",
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