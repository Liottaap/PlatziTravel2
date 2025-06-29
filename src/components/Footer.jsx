import ig from '../assets/icons/instagram-svgrepo-com.svg'
import tw from '../assets/icons/twitter-svgrepo-com.svg'
import ws from '../assets/icons/whatsapp-128-svgrepo-com.svg'
import '../index.css';
import { Link } from 'react-router-dom';

function Footer(){
    
    return(
        <footer className='relative bg-primary text-white flex flex-col p-10 gap-10'>
        <div className='flex flex-col justify-center items-center text-center md:flex-row md:justify-around gap-10'>
          <section>
            <h3 className='text-xl font-semibold'>Sobre Nosotros</h3>
            <ul>
              <li className='text-sm'><a href="/">Inversores</a></li>

              <Link to="/politicas" className='text-sm'>Politicas de Privacidad</Link>
              <li className='text-sm'><a href="">Platzi Travel, inc</a></li>
            </ul>
          </section>
          <section>
            <h3 className='text-xl font-semibold'>Menu</h3>
            <ul className=''>
              <li className='text-sm'><a href="">Inicio</a></li>
              <li className='text-sm'><a href="">Rentas</a></li>
              <li className='text-sm'><a href="">Destacados</a></li>
              <li className='text-sm'><a href="">Divisas</a></li>
            </ul>
          </section>
          <section>
            <h3 className='text-xl font-semibold'>Contacto</h3>
            <ul>
              <li className='text-sm'>Direccion 1234 - lorem ipsum</li>
              <li className='text-sm'>+54 123 4567</li>
            </ul>
          </section>
        </div>
        <section className='flex justify-center'>
          <h4>© Platzi Travel - todos los derechos reservados</h4>
          <article className='flex absolute bottom-0 right-10'>
            <img src={ws} alt="" className='w-8'/>
            <img src={tw} alt="" className='w-8'/>
            <img src={ig} alt="" className='w-8'/>
          </article>
        </section>
      </footer>
    )
}

export default Footer