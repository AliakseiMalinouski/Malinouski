import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { PageHome } from "../Pages/PageHome";
import { PageAuth } from "../Pages/PageAuth";

export const PageRouter = () => {
    return (
        <Routes>
            <Route path="/registration-page" element={<PageAuth/>} />
            <Route path="/" element={<PageHome/>} />
        </Routes>
    )
}