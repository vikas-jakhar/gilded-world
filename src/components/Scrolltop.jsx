import React, { useEffect, useState } from 'react';
import Scroll from "../assets/image/svg/srcolltop.svg";

const Scrolltop = () => {
    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setvisible] = useState(false);
    const togglevisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setvisible(true);
        }
        else if (scrolled <= 400) {
            setvisible(false);
        };
    };
    useEffect(() => {
        window.addEventListener('scroll', togglevisible);
        return () => {
            window.removeEventListener('scroll', togglevisible)
        }
    }, [])
    return (
        <div onClick={scrolltotop} className=" animate-bounce place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[4%] bg-white bottom-[4%] cursor-pointer shadow-[0_0_10px_#003E92_inset] duration-300 ease-linear hover:shadow-[0px_0px_5px_2px_#003E92,0_0_20px_#FFFFFF] z-10" style={{ display: visible ? 'grid' : 'none' }}>
            <img src={Scroll} alt="Scroll" className=' lg:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    )
}

export default Scrolltop;
