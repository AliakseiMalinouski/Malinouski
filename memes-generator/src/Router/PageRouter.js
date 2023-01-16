import {Routes, Route} from 'react-router-dom';
import { PageHome } from '../Pages/PageHome';
import { PageMemeDetails } from '../Pages/PageMemeDetails';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageHome/>}/>
            <Route path='/meme-details/:memename' element={<PageMemeDetails/>}/>
        </Routes>
    )
}

