import { Route, Routes } from 'react-router-dom';
import { PageCatalog } from '../Pages/PageCatalog';
import { PageBookDetails } from '../Pages/PageBookDetails';
import { PageFavouriteBooks } from '../Pages/PageFavouriteBooks';
import { PageBasket } from '../Pages/PageBasket';
import { PageAuth } from '../Pages/PageAuth';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageCatalog />} />
            <Route path='/details/:bookname' element={<PageBookDetails/>} />
            <Route path='/favourite-books' element={<PageFavouriteBooks />} />
            <Route path='/basket' element={<PageBasket/>} />
            <Route path='/regestration' element={<PageAuth/>} />
        </Routes>
    )
}