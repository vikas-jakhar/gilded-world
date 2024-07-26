import React, { useEffect, useState } from 'react';
import logo from "../assets/image/svg/logo.svg";

const Preloader = () => {
    const [visible, setvisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        const timer = setTimeout(() => {
            setvisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 1000);
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    if (!visible) return null;
    return (
        <section className=' min-h-screen w-full bg-black z-30 fixed top-0 left-0 grid place-items-center'>
            <div className=" animate-bounce text-white text-2xl font-poppins font-bold">
                <img src={logo} alt="logo" />
            </div>
        </section>
    )
}

export default Preloader;
