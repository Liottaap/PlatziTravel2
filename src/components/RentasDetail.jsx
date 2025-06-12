import { useParams, Link } from 'react-router-dom'
import ciudades from '../ciudades.json'
import estrellas from '../assets/icons/five-stars.png'
import alojamientoDefault from '../assets/img/casa-alquiler1.jpeg'

function RentasDetail(){
    const { id } = useParams();
    console.log("ID desde URL:", id);

    // Suponiendo que el id en el JSON es numérico
    const alojamiento = ciudades.alojamientos.find((item) => item.id === parseInt(id));

    const descuento = alojamiento.precio - (alojamiento.precio * 0.20)
    
    if (!alojamiento) return <p>No se encontró alojamiento</p>

    return(
        <>
        <article className="flex w-full gap-10 p-10 justify-between items-start">
            {/* Imagen + volver */}
            <section className="flex flex-col w-1/2 gap-10 justify-center">
                <img src={ alojamientoDefault} alt={alojamiento.nombre} className="rounded-lg" />
                <div className='flex justify-between'>
                    <img src={ alojamientoDefault} alt={alojamiento.nombre} className="shadow-xl rounded-lg w-48" />
                    <img src={ alojamientoDefault} alt={alojamiento.nombre} className="shadow-xl rounded-lg w-48" />
                    <img src={ alojamientoDefault} alt={alojamiento.nombre} className="shadow-xl rounded-lg w-48" />
                </div>
            </section>

            {/* Detalle */}
            <section className="text-left w-1/2 flex flex-col gap-5">
                <div className='flex justify-between items-center'>
                    <img src={estrellas} alt="estrellas" className="w-52" />
                    <button className="w-32 bg-accent text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all">
                    Reservar
                </button>
                </div>
                <h2 className="text-4xl font-bold">{alojamiento.nombre}</h2>
                <div className='flex items-center gap-10'>
                    <p className="text-2xl font-semibold text-primary">$ {descuento}</p>
                    <p className='text-green-500 text-center font-semibold'>{alojamiento.esOferta ? "20% Off!" : ""}</p>
                </div>
                <p className="text-lg">{alojamiento.descripcion}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio architecto natus quo eos? Aliquam incidunt laboriosam asperiores beatae nulla, maxime iure consequuntur similique exercitationem sint, excepturi dolorem doloremque pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, excepturi totam. Totam doloremque hic harum assumenda molestiae at. Quasi consequatur deserunt adipisci voluptas nihil nobis iure nulla a, consectetur dicta!</p>

            </section>
        </article>
        <Link to="/rentas" className="text-accent underline text-lg">← Volver</Link>
        </>
    )
}

export { RentasDetail };