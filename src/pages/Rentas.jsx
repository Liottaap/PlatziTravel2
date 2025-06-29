import { Buscador } from "../components/Buscador";
import { RentaItem } from "../components/RentaItem";
import {MasRentas} from "../components/MasRentas";

function Rentas() {

    return(
        <main className="min-h-screen flex flex-col items-center justify-center">

            <MasRentas/>
            <RentaItem />
            
        </main>
    )
}

export {Rentas}