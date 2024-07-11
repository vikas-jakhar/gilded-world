import React from 'react';
import women from "../assets/image/webp/women.png";

const Nft = () => {
    return (
        <section className='py-5 bg-nft bg-no-repeat bg-cover bg-center -mt-2'>
            <div className="container px-3 bg-nft bg-no-repeat bg-cover bg-center">
                <div className=" flex flex-row flex-wrap -mx-3 -mt-3">
                    <div className=" w-1/2 px-3 pt-px">
                        <div className="flex flex-col pt-12">
                            <h2 className='font-bold text-5xl leading-[61px] font-Josefin text-white mt-12'><span className=' bg-[linear-gradient(90deg,_#815CC8_100%,_#1BABFE_0%)] bg-clip-text text-transparent'>NFT</span> Utility</h2>
                            <p className=' mt-4 font-poppins font-normal text-xl leading-[35px] text-white opacity-70 max-w-[649px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.
                            </p>
                        </div>
                    </div>
                    <div className=" w-1/2 px-3 flex justify-end">
                        <img src={women} alt="women" className=' w-full max-w-[505px] min-h-[724px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nft
