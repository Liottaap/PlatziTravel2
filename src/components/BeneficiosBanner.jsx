import banner1 from '../assets/img/banner-home-1.png'
import banner2 from '../assets/img/banner-home-2.png'
import banner3 from '../assets/img/banner-home-3.png'


function BeneficiosBanner(){

    return(
        <section className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scroll touch-pan-x
        sm:w-max sm:flex-nowrap 
        md:w-full md:overflow-x-hidden ">

            <img src={banner1} alt="" 
            className="w-[395px] flex-shrink-0 snap-start 
                md:w-full md:flex-shrink md:snap-none" />

            <img src={banner2} alt="" 
            className="w-[395px] flex-shrink-0 
                md:w-full md:flex-shrink md:snap-none" />

            <img src={banner3} alt="" 
            className="w-[395px] flex-shrink-0 
                md:w-full md:flex-shrink md:snap-none" />

        </section>
    )
}

export {BeneficiosBanner}