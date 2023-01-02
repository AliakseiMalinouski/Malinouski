import { Route, Routes } from 'react-router-dom';
import { PageCatalog } from '../Pages/PageCatalog';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageCatalog/>} />
        </Routes>
    )
}