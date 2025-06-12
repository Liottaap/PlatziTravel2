

function Destacados(){

    return(
        <section className="grid grid-cols-2 grid-rows-3 gap-4 px-2 md:px-4">
            <article className=" cardRecomendado cursor-pointer col-span-2 bg-chicago lg:bg-center">
                <p className="cardTitle text-black">Chicago</p>
                <p className="text-sm pl-8 text-black mr-24 lg:text-lg">
                    2 habitaciones, baño y cocina
                </p>
                </article>
                
                <article className="cardRecomendado  cursor-pointer col-span-2 bg-LA 
                md:col-span-1 md:row-span-2 md:h-auto">
                <p className="cardTitle">Los Angeles</p>
                <p className="text-sm pl-8 text-white mr-24 lg:text-lg">
                    3 habitaciones, 2 baños, cocina y excelente vista al mar.
                </p>
                </article>

                <article className="cardRecomendado cursor-pointer col-span-2 bg-miami 
                md:col-span-1">
                <p className="cardTitle text-white">Miami</p>
                <p className="text-sm pl-8 text-white mr-24 lg:text-lg">
                    4 habitaciones, 3 baños, cocina y piscina privada
                </p>
            </article>

            <article className="cardRecomendado cursor-pointer col-span-2 bg-bali 
            md:col-span-1">
                <p className="cardTitle">Bali</p>
                <p className="text-sm pl-8 text-white mr-24 lg:text-lg">
                    2 habitaciones, baño, cocina y piscina privada
                </p>
        </article>
      </section>
    )
}

export {Destacados}