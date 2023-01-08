import { Route, Routes } from 'react-router-dom';
import { PageCatalog } from '../Pages/PageCatalog';
import { PageBookDetails } from '../Pages/PageBookDetails';
import { PageFavouriteBooks } from '../Pages/PageFavouriteBooks';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageCatalog />} />
            <Route path='/details/:bookname' element={<PageBookDetails/>} />
            <Route path='/favourite-books' element={<PageFavouriteBooks/>} />
        </Routes>
    )
}