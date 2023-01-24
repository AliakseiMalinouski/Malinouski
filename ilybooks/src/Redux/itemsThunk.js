import { getItems } from "./ItemsSlice";

export const itemsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/926f1c521f82b848160f80d1b20b8ab5/raw/46bb4a2c6cb8ab275678a7fe9303b482dd47883a/CatalogItemsIlyBooks",
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