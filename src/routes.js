import Cabecera from "components/Cabecera/Cabecera"
import Rodapie from "components/Rodapie/Rodapie"
import NuevoVideo from "pages/NuevoVideo";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/NuevoVideo" element={<NuevoVideo />} />
            </Routes>
            <Rodapie />
        </BrowserRouter>
    )
}

export default AppRoutes;