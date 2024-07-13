import React from 'react';
import line from "../assets/image/webp/timeline.png";
import dotted from "../assets/image/webp/dotted-line.png";

const Roadmap = () => {
    const timeline = [
        {
            id: 1, phase: 'Phase 1', q: 'Q1 2022', time_box: [
                { id: 1, text: 'Whitelist/Presale Created' },
                { id: 2, text: 'Private Sale' },
                { id: 3, text: 'Public Sale' },
                { id: 4, text: 'Prime Eternal Owner Perks ' },
            ]
        },
        {
            id: 2, phase: 'Phase 2', q: 'Q2 2022', time_box: [
                { id: 1, text: 'Token & Staking Release' },
                { id: 2, text: 'Staking Gameplay' },
            ]
        },
        {
            id: 3, phase: 'Phase 3', q: 'Q3 2022', time_box: [
                { id: 1, text: 'MVP Gameplay Release ' },
                { id: 2, text: 'Battle Modes Release' },
                { id: 3, text: 'Land Gameplay Release' },
                { id: 4, text: 'Gear Forging Release' },
            ]
        },
    ];

    return (
        <section className='pt-20 -mt-2 bg-black pb-16 relative'>
            <div className="container px-3 mt-2.5 mb-3 relative">
                <h2 className='text-center font-Josefin mb-24 font-bold text-5xl text-white'><span className='bg-gradient-to-tr from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>Road</span>map</h2>
                <div className="pt-px flex flex-wrap flex-row -mx-3 relative">
                    {timeline.map((item, index) => (
                        <div key={item.id} className={`lg:w-4/12 w-full flex px-3 relative z-[1] mt-6 lg:mt-0 lg:${index === 1 ? 'justify-center' : (index === timeline.length - 1 ? 'justify-end' : '')}`}>
                            <div className=" flex gap-10 lg:gap-0 lg:flex-col">
                                <span className='flex w-[65px] h-[62px] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] rounded-full shadow-[0px_0px_63.22px_0px_#1BABFE] mb-9'></span>
                                <div className=" flex flex-col">
                                    <p className='pt-0.5 font-poppins font-semibold text-lg text-white'>{item.phase}</p>
                                    <p className='mt-0.5 font-poppins font-semibold text-white text-4xl'>{item.q}</p>
                                    {item.time_box.map((data) => (
                                        <div key={data.id} className="flex items-center mt-3 pl-2 gap-3">
                                            <span className='flex p-0.5 rounded-full bg-white opacity-70'></span>
                                            <p className='font-Montserrat font-normal gap-3 text-lg text-white opacity-70'>{data.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <img src={line} alt="line" className=' absolute lf:top-[33px] top-[40%] -left-[25.5%] lg:left-8 lg:w-[78%] w-[63%] xl:w-[82%] rotate-90 lg:rotate-0' />
                    <img src={dotted} alt="dotted" className=' absolute left-[82%] xl:left-[85%] w-full top-[33px]' />
                </div>
            </div>
        </section>
    );
}

export default Roadmap;