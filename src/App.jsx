
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/main";
import { Faqs } from "./pages/Faqs";
import { Rentas } from "./pages/Rentas";
import { RentasDetail } from "./components/RentasDetail";
import { BusquedaProvider } from "./context/BusquedaContext";
function App(){
    return(
        <div className="bg-mainBg bg-cover bg-center  min-h-screen ">
            <BrowserRouter>
                <BusquedaProvider>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Main/>}/>
                            <Route path="/divisas" element={<h1>Divisas</h1>}/>
                            <Route path="/rentas" element={<Rentas/>}/>
                            <Route path="/rentas/:id" element={<RentasDetail/>}/>
                            <Route path="/faqs" element={<Faqs/>}/>
                            <Route path="/login" element={<h1>Iniciar Sesión</h1>}/>
                        </Route>
                    </Routes>
                </BusquedaProvider>
            </BrowserRouter>
        </div>

    )
}

export default App;