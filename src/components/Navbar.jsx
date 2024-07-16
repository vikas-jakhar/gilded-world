import React, { useState } from 'react';
import logo from "../assets/image/svg/logo.svg";
import Icon from './Icon';

const Navbar = () => {
    const [open, setopen] = useState(false);
    function togglemenu() {
        setopen(!open);
    }
    const navlink = [
        { id: 1, text: "About" },
        { id: 2, text: "Presale $GILD" },
        { id: 3, text: "Staking $GILD" },
        { id: 4, text: "$GILD Nodes" },
    ]
    return (
        <header className=' fixed top-0 left-0 w-full py-4 bg-primary_black z-20'>
            <div className="container px-3 my-0.5 py-px 2xl:px-0">
                <nav className=' flex justify-between items-center'>
                    <a href="#">
                        <img src={logo} alt="logo" className=' w-10/12 sm:w-auto' />
                    </a>
                    <div className={`${open ? "left-0" : "-left-full"} flex items-center duration-300 ease-linear xl:gap-10 gap-6 flex-col fixed justify-center z-10 top-0 bg-hero-bg bg-center bg-no-repeat bg-cover w-full min-h-screen lg:relative lg:flex-row lg:w-fit lg:min-h-fit lg:left-0 lg:bg-none`}>
                        {navlink.map(link => (
                            <a key={link.id} href="#" className=' font-normal font-Josefin text-white text-22 lg:duration-0 lg:text-lg xl:text-22 duration-300 ease-linear relative after:absolute after:content-[""] after:bg-white after:h-0.5 after:-bottom-1 after:right-0 hover:after:w-full after:duration-300 after:ease-linear after:w-0 hover:after:left-0 hover:after:right-auto'>{link.text}</a>
                        ))}
                        <button className=' flex items-center gap-2.5 font-Josefin text-white font-normal text-2xl py-[10px] px-[34px] bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[79px] shadow-[0px_8px_30px_0px_#1BABFE] duration-300 ease-linear hover:scale-90 hover:shadow-[0px_0px_0px_2px_#1BABFE]'>
                            <span>
                                <Icon icon="Discord" />
                            </span>
                            Discord
                        </button>
                    </div>
                    <div className=" relative w-6 h-5 z-20 lg:hidden" onClick={togglemenu}>
                        <span className={`${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"} flex duration-300 ease-linear bg-white absolute w-full h-1 left-0`}></span>
                        <span className={`${open ? " opacity-0" : ""} bg-white flex absolute w-full duration-300 ease-linear h-1 top-1/2 -translate-y-1/2 left-0`}></span>
                        <span className={`${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"} flex duration-300 ease-linear bg-white absolute w-full h-1 left-0`}></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;