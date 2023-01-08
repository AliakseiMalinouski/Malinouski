import { getImages } from "./IconsHeaderSlice";


export const iconThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/0dab2730b54beba6196bd8b70e34fa21/raw/d9f7aa9b1072643ed60032c38cc29e309b65b9fb/IconsHeaderIllyBooks",
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