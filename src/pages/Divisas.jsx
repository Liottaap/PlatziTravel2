import CurrencyConverter from "../components/CurrencyConversor";
import React from 'react';
import { Recomendados } from "../components/Recomendados";
import { MasRentas } from "../components/MasRentas";

function Divisas() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 flex flex-col justify-between">
        <section>
            <h1 className="text-2xl font-bold text-center mb-6 text-primary">Conversor de Divisas</h1>
            <CurrencyConverter />
        </section>


        <section>
            <h2 className="font-bold px-10">Explorá más lugares y seguí viajando</h2>
            <MasRentas/>
        </section>

    </main>
  );
}

export {Divisas};
