import { Buscador } from "../components/Buscador";
import { Recomendados } from "../components/Recomendados";
import { RentaItem } from "../components/RentaItem";


function Rentas() {

    return(
        <main className="min-h-screen flex flex-col items-center justify-center">

            <Recomendados/>
            <RentaItem />
            
        </main>
    )
}

export {Rentas}