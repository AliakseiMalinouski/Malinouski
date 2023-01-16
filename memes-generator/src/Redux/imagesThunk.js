import { getImages } from "./imagesSlice";

export const imagesThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/5aba7c3d9ced789edbcaddf1186c7d8f/raw/c0b653a3b870d1e9cc19960cf4b93f5454d226ad/ImagesMeme");
        if(response.ok) {
            const data = await response.json();
            dispatch(getImages(data));
        }
        else {
            alert("Error with download data, try again, please");
        }
    }
    catch (error) {
        alert("Error with download data, try again, please");
    }
}