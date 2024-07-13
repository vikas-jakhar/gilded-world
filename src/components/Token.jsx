import React from 'react';
import billion from "../assets/svg/billion.svg";
import hand from "../assets/svg/hand-coin.svg";
import holder from "../assets/svg/holders.svg";
import nft from "../assets/svg/nft.svg";

const Token = () => {
    const blue_box = [
        { id: 1, heading: '3 Billion', text: 'GILD Token Info', image: billion },
        { id: 2, heading: 'Pre Sale Token', image: hand },
        { id: 3, heading: '100,000+', text: 'Holders', image: holder },
        { id: 4, heading: '2,500+', text: 'NFT Sold', image: nft },
    ];

    return (
        <section className='bg-token bg-no-repeat bg-center bg-cover py-5 xl:py-24 -mt-2'>
            <div className="container px-3 xl:mt-8 mb-10 pt-2.5 2xl:px-0">
                <h2 className='font-bold font-Josefin text-3xl sm:text-5xl xl:mt-8 text-white text-center mb-14 pb-0.5'>
                    <span className='bg-gradient-to-tr from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>$GILD</span> Token Info
                </h2>
                <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap gap-6 pt-3">
                    {blue_box.map((item) => (
                        <div key={item.id} className="lg:w-3/12 sm:w-5/12 w-10/12 group">
                            <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)] group-hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] duration-300 ease-linear p-px rounded-[13px] min-h-[181px] group-hover:shadow-[0px_8px_30px_0px_#1BABFE]">
                                <div className="bg-black rounded-[13px] group-hover:bg-transparent">
                                    <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] min-h-[179px] rounded-[13px] flex justify-center h-full flex-col items-center duration-300 ease-linear group-hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]">
                                        <img src={item.image} alt="billion" className='mt-0.5' />
                                        <p className='mt-2 pt-0.5 text-white font-bold text-3xl font-Josefin text-center'>
                                            {item.heading}
                                        </p>
                                        <p className='font-Josefin font-normal text-white text-lg mt-0.5'>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Token;
