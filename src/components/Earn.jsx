import React from 'react';
import gif from "../assets/image/gif/gilded-world.gif";
import smoke_left from "../assets/image/webp/smoke-design-left.png";
import smoke_right from "../assets/image/webp/smoke-design-right.png";

const Earn = () => {
    return (
        <section className=' relative bg-black py-5 -mt-2'>
            <div className="container px-3 relative z-[1] mt-8 pt-12">
                <div className="flex flex-col items-center pb-1.5">
                    <h2 className=' font-Josefin font-bold text-5xl text-white'>
                        Play To <span className=' bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] bg-clip-text text-transparent'>Earn</span>
                    </h2>
                    <p className=' mt-5 font-poppins font-normal text-xl leading-[33px] text-white opacity-70 text-center max-w-[1024px]'>
                        Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!
                    </p>
                </div>
                <div className=" bg-gradient-to-br from-[#815CC8] to-[#1BABFE] max-h-[561px] h-full w-full p-[5px] rounded-[13px] mt-12">
                    <img src={gif} alt="gif" className=' w-full rounded-[13px] max-h-[551px] h-full' />
                </div>
            </div>
            <img src={smoke_left} alt="smoke_left" className=' absolute bottom-0 left-0' />
            <img src={smoke_right} alt="smoke_right" className=' absolute bottom-0 right-0' />
        </section>
    )
}

export default Earn
