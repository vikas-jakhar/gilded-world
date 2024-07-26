import React from 'react';
import quote_left from "../assets/image/webp/quote-left.webp";
import quote_right from "../assets/image/webp/quote-right.webp";

const Game = () => {
    return (
        <div className=' bg-game bg-no-repeat bg-cover bg-center py-10 -mt-2 xl:min-h-[705px] md:min-h-[600px] flex items-center'>
            <div className="container px-3 md:my-3 my-10 py-10 md:py-0 flex justify-center 2xl:px-0">
                <div className=" relative md:mx-16 xl:mx-0">
                    <h2 className=' font-Josefin relative z-[1] font-normal text-center text-white md:text-40 text-2xl md:leading-[62.4px] max-w-[940px]' data-aos="zoom-in-up" data-aos-duration="1500">
                        Gilded Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the game!
                    </h2>
                    <img src={quote_left} alt="quote_left" className=' w-2/12 sm:w-1/12 absolute md:-top-[61px] -top-7 hidden md:w-auto sm:flex sm:-left-2 md:-left-20 lg:-left-4 xl:-left-[82px]' data-aos="zoom-in-right" data-aos-duration="1500" />
                    <img src={quote_right} alt="quote_right" className=' w-2/12 sm:w-1/12 absolute md:-bottom-12 -bottom-5 hidden md:w-auto sm:flex sm:right-36 md:right-20 lg:-right-4 xl:right-[18%]' data-aos="zoom-in-left" data-aos-duration="1500" />
                </div>
            </div>
        </div>
    )
}

export default Game;