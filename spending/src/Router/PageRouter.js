import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { PageHome } from "../Pages/PageHome";
import { PageAuth } from "../Pages/PageAuth";
import { PageIntrudaction } from "../Pages/PageIntrudaction";

export const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PageIntrudaction/>} />
            <Route path="/registration-page" element={<PageAuth/>} />
            <Route path="/home-page" element={<PageHome/>} />
        </Routes>
    )
}