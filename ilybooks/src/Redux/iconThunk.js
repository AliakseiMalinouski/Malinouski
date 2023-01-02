import { getImages } from "./IconsHeaderSlice";


export const iconThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/0dab2730b54beba6196bd8b70e34fa21/raw/de667b1252496b13a23438891e7a8a67291538f8/IconsHeaderIllyBooks",
        {
            method: 'get'
        }
    )
        .then(response => {
            if (!response.ok) {
            alert("Error with connection")
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            dispatch(getImages({ images: data }));
    })
}