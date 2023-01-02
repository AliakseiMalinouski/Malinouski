import { getList } from "./HeaderListSlice";

export const listThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/0a8f82e223c6804c2426300698944110/raw/e82260c3ea56af8558a8ff2126564b920260c229/ListHeaderIlliBooks",
            {
                method: 'get'
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
                dispatch(getList({list: data}));
            })
        .catch(error => {
            alert(error)
    })
}