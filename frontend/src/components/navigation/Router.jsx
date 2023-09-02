import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import RickAndMortyDetails from "../pages/RickAndMortyDetails";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/characters/:id" element={<RickAndMortyDetails />} />
        </Routes>
    )
}

export default Router;