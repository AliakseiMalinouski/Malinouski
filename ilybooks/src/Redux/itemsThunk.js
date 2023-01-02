import { getItems } from "./ItemsSlice";

export const itemsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/926f1c521f82b848160f80d1b20b8ab5/raw/a9da8b43cc1c2f213475c50cc7771e9aa860655b/CatalogItemsIlyBooks",
        {
         method: 'get'
     }
    )
        .then(response => {
            if (!response.ok) {
                alert("error with connection");
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            dispatch(getItems({ data: data }));
    })
}