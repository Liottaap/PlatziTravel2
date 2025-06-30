import Noruega from '../assets/img/norway.jpg'


function Recomendados(){

    return(
        <section className='px-4'>
        <h2 className='text-2xl font-bold mb-4'>Recomendados</h2>
  
        <ul className='flex justify-start gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scroll touch-pan-x'>      
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <li key={i} className='group overflow-hidden cursor-pointer bg-primary min-w-[180px] h-[250px] text-center text-white rounded-10 snap-start shrink-0 flex flex-col justify-between'>
            <img
              src={Noruega}
              className='w-full h-2/3 rounded-tl-10 rounded-tr-10 object-cover transform  duration-[1000ms]  group-hover:h-full hover:w-max transition-all '
              alt=''
            />
            <div className='h-1/3 mt-2 px-2 hover:bg-transparent  bottom-0 right-0 left-0'>
              <h3 className='text-l'>Nombre</h3>
              <p className='text-sm'>descripción</p>
            </div>
          </li>
          ))}
        </ul>
        </section>
    )
}
export {Recomendados}