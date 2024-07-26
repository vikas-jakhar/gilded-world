import React from 'react';
import gif from "../assets/image/gif/gilded-world.gif";
import smoke_left from "../assets/image/webp/smoke-design-left.webp";
import smoke_right from "../assets/image/webp/smoke-design-right.webp";

const Earn = () => {
    return (
        <div className=' relative bg-black py-5 -mt-2'>
            <div className="container px-3 relative z-[1] lg:mt-8 lg:pt-12 pb-12 mb-14 2xl:px-0">
                <div className="flex flex-col items-center pb-1.5">
                    <h2 className=' font-Josefin font-bold text-3xl sm:text-5xl text-white' data-aos="zoom-in-up" data-aos-duration="1500">
                        Play To <span className=' bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] bg-clip-text text-transparent'>Earn</span>
                    </h2>
                    <p className=' mt-5 font-poppins font-normal text-base sm:text-xl sm:leading-[33px] text-white opacity-70 text-center max-w-[1024px]' data-aos="zoom-in-up" data-aos-duration="1500">
                        Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!
                    </p>
                </div>
                <div className=" bg-gradient-to-br from-[#815CC8] to-[#1BABFE] max-h-[561px] h-full w-full p-[5px] rounded-[13px] mt-12" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src={gif} alt="gif" className=' w-full rounded-[13px] max-h-[551px] h-full' />
                </div>
            </div>
            <img src={smoke_left} alt="smoke_left" className=' absolute bottom-28 left-0' />
            <img src={smoke_right} alt="smoke_right" className=' absolute bottom-28 right-0' />
        </div>
    )
}

export default Earn
