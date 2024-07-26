import React from 'react';
import women from "../assets/image/webp/women.webp";

const Nft = () => {
    return (
        <div className='py-5 bg-nft bg-no-repeat bg-cover bg-center -mt-2'>
            <div className="container px-3 2xl:px-0">
                <div className=" flex flex-row flex-wrap -mx-3 -mt-3">
                    <div className=" lg:w-1/2 w-full px-3 pt-px" data-aos="zoom-in-right" data-aos-duration="1500">
                        <div className="flex flex-col items-center lg:items-start lg:pt-12">
                            <h2 className='font-bold sm:text-5xl text-3xl sm:leading-[61px] font-Josefin text-white lg:mt-12'><span className=' bg-gradient-to-r from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>NFT</span> Utility</h2>
                            <p className=' mt-4 font-poppins font-normal text-sm  sm:text-xl sm:leading-[35px] text-white text-center lg:text-left opacity-70 max-w-[649px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.
                            </p>
                        </div>
                    </div>
                    <div className=" lg:w-1/2 w-full px-3 flex justify-center mt-6 lg:mt-0 lg:justify-end" data-aos="zoom-in-left" data-aos-duration="1500">
                        <img src={women} alt="women" className=' w-full max-w-[505px] md:min-h-[724px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nft
