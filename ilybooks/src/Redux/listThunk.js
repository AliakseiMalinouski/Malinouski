import { getList } from "./HeaderListSlice";

export const listThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/0a8f82e223c6804c2426300698944110/raw/e2f6f0774053593cea9f867a514901508659aaca/ListHeaderIlliBooks",
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