import React from 'react';
import gold from "../assets/image/webp/gold.png";
import Icon from './Icon';

const Uniswap = () => {
    return (
        <section className=' bg-Uniswap bg-no-repeat bg-cover bg-center xl:min-h-[885px] py-10 -mt-2 flex items-center'>
            <div className="container px-3 2xl:px-0 my-10">
                <div className="flex flex-wrap -mx-3 flex-row mt-[70px]">
                    <div className=" w-full sm:w-1/2 px-3" data-aos="zoom-in-right" data-aos-duration="1500">
                        <h2 className=' text-white font-Josefin font-bold text-5xl'>
                            Buy On <span className='bg-gradient-to-tr from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>Uniswap</span>
                        </h2>
                        <div className="flex items-center gap-3 mt-6 pl-2">
                            <span className=' p-0.5 flex bg-white rounded-full'></span>
                            <p className=' font-Josefin font-normal text-white text-xl'>100,000+ Airdrop</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3 pl-2">
                            <span className=' p-0.5 flex bg-white rounded-full'></span>
                            <p className=' font-Josefin font-normal text-white text-xl'>NFT $GILD giveaway</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3 pl-2 pb-px">
                            <span className=' p-0.5 flex bg-white rounded-full'></span>
                            <p className=' font-Josefin font-normal text-white text-xl'>Announcement and Games</p>
                        </div>
                        <button className=' mt-10 rounded-[79px] shadow-[0px_8px_30px_0px_#1BABFE] px-[19px] py-[10.5px] flex items-center bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] gap-2.5 font-Josefin font-normal text-2xl text-white duration-300 ease-linear hover:shadow-[0px_8px_30px_0px_#1BABFE,0px_0px_0px_2px_#FFFFFF] hover:bg-none'><Icon icon="Horse" />Buy Now</button>
                    </div>
                    <div className=" w-full mt-6 sm:mt-0 sm:w-1/2 px-3 flex justify-center" data-aos="zoom-in-left" data-aos-duration="1500">
                        <img src={gold} alt="gold" className=' w-full max-w-[341px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Uniswap
