import { getItems } from "./ItemsSlice";

export const itemsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/926f1c521f82b848160f80d1b20b8ab5/raw/83f33850d9ee8208784a1250cb621e63fa518657/CatalogItemsIlyBooks",
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