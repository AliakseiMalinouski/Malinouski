import { getItems } from "./ItemsSlice";

export const itemsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/926f1c521f82b848160f80d1b20b8ab5/raw/be293396472b3a50e3dae84dac52bd3d6194dd78/CatalogItemsIlyBooks",
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