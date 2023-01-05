import { getItems } from "./ItemsSlice";
import { updateLoadState } from "./ItemsSlice";

export const loadItems = async (dispatch) => {
    dispatch(updateLoadState({loadState: 1}))
    const response = await fetch("https://reqres.in/api/products",
     {
         method: 'get',
         headers: {
                "Accept": "application/json",
        },
     }
    )
    try {
        if (response.ok) {
            const data = await response.json();
            dispatch(updateLoadState({ loadState: 2 }));
            dispatch(getItems({data: data}))
        }
        else {
            dispatch(updateLoadState({ loadState: 3 }));
        }
    }
    catch {
        dispatch(updateLoadState({ loadState: 2 }));
    }
}