import React from 'react';
import unreal from "../assets/image/webp/unreal.png";
import uniswap from "../assets/image/webp/uniswap.png";
import coin from "../assets/image/webp/coin.png";
import polygon from "../assets/image/webp/polygon.png";

const Powered = () => {
    const blue_box = [
        { id: 1, image: unreal, link: 'https://www.unrealengine.com/en-US' },
        { id: 2, image: uniswap, link: 'https://uniswap.org/' },
        { id: 3, image: coin, link: 'https://www.coingecko.com/' },
        { id: 4, image: polygon, link: 'https://polygon.technology/' },
    ];
    return (
        <section className=' py-5 xl:py-14 bg-black -mt-1'>
            <div className="container px-3 2xl:px-0 mt-1.5 xl:mb-14">
                <h2 className=' font-Josefin font-bold text-4xl sm:text-5xl text-white text-center mb-16'><span className='bg-gradient-to-tr from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>Powered</span> By:</h2>
                <div className=" pt-1 gap-6 flex flex-row flex-wrap justify-center lg:flex-nowrap">
                    {blue_box.map((item) => (
                        <div key={item.id} className="lg:w-3/12 sm:w-5/12 w-10/12 group">
                            <div className="bg-[linear-gradient(116.46deg,_rgba(255,_255,_255,_0.2)_2.09%,_rgba(255,_255,_255,_0.1)_96.43%)] group-hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] duration-300 ease-linear p-px rounded-[13px] min-h-[181px] group-hover:shadow-[0px_8px_30px_0px_#1BABFE]">
                                <div className="bg-black rounded-[13px] group-hover:bg-transparent">
                                    <a href={item.link} target='_blank' className="px-2 bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] min-h-[179px] rounded-[13px] flex justify-center h-full flex-col items-center duration-300 ease-linear group-hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]">
                                        <img src={item.image} alt="billion" className='mt-0.5 w-full' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Powered
