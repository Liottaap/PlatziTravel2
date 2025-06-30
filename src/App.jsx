
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/main";
import { Faqs } from "./pages/Faqs";
import { Rentas } from "./pages/Rentas";
import { RentasDetail } from "./components/RentasDetail";
import { BusquedaProvider } from "./context/BusquedaContext";
import Politicas from "./pages/Politicas";
import { Login } from "./pages/login";
import { Registro } from "./pages/Registro";
import { MiCuenta } from "./pages/MiCuenta";
import {Divisas} from "./pages/Divisas";

function App(){
    return(
        <div className="bg-mainBg bg-cover bg-center  min-h-screen ">
            <BrowserRouter>
                <BusquedaProvider>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Main/>}/>
                            <Route path="/rentas" element={<Rentas/>}/>
                            <Route path="/rentas/:id" element={<RentasDetail/>}/>
                            <Route path="/faqs" element={<Faqs/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/politicas" element={<Politicas/>}/>
                            <Route path="/registro" element={<Registro/>}/>
                            <Route path='/cuenta' element={<MiCuenta/>}/>
                            <Route path='/divisas' element={<Divisas/>}/> 
                        </Route>
                    </Routes>
                </BusquedaProvider>
            </BrowserRouter>
        </div>

    )
}

export default App;