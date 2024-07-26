import React, { useState } from 'react';
import Icon from './Icon';
import logo from "../assets/image/svg/logo.svg";

const Questions = () => {
    const accordionData = [
        {
            q: 'Q.1',
            title: 'Lectus tristique turpis id?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.',
        },
        {
            q: 'Q.2',
            title: 'Ac pharetra nisl nec dignissim odio sed justo velit nisl.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.',
        },
        {
            q: 'Q.3',
            title: 'Arcu tristique semper neque sed condimentum.?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.',
        },
        {
            q: 'Q.4',
            title: 'Nam imperdiet iaculis vel felis commodo?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.',
        },
        {
            q: 'Q.5',
            title: 'Quam faucibus sagittis sed ultrices?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const footer_icon = [
        { id: 1, name: 'DiscordGray', link: '' },
        { id: 2, name: 'Twitter', link: '' },
        { id: 3, name: 'Telegram', link: '' },
        { id: 4, name: 'Dot', link: '' },
        { id: 5, name: 'Reddit', link: '' },
        { id: 6, name: 'Github', link: '' },
    ]

    const current_year = new Date().getFullYear();

    const Footer_link = [
        {
            id: 1, heading: 'About:', heading_box: [
                { id: 1, heading_text: 'About Us', },
                { id: 2, heading_text: 'Career' },
                { id: 3, heading_text: 'Gilded Nodes' },

            ],
        },
        {
            id: 1, heading: 'Gilded Token:', heading_box: [
                { id: 1, heading_text: 'Etherscan.io', },
                { id: 2, heading_text: 'Github' },
                { id: 3, heading_text: 'Uniswap' },

            ],
        },
    ]

    return (
        <div className='pt-10 pb-2.5 -mt-1 bg-Questions bg-cover bg-no-repeat bg-center relative'>
            <div className="container px-3 2xl:px-0 mt-10 pt-8">
                <h2 className='font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-3' data-aos="zoom-in-up" data-aos-duration="1500">
                    Frequently Asked <span className='bg-gradient-to-tr from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>Questions</span>
                </h2>
                <div className="flex flex-col items-center lg:mb-14 mb-8 md:pt-14 xl:pb-14">
                    {accordionData.map((item, index) => (
                        <div key={index} className="accordion max-w-[1038px] mt-6 w-full p-px bg-[linear-gradient(90.28deg,_rgba(255,_255,_255,_0.13)_0%,_rgba(255,_255,_255,_0.03)_99.96%)] rounded-md" data-aos="zoom-in-up" data-aos-duration="1500">
                            <div className="bg-black rounded-md overflow-hidden">
                                <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(255,_255,_255,_0.03)_100%)]">
                                    <div
                                        className={`${openIndex === index ? 'py-4' : 'py-6'} accordion-header px-[19px] flex items-start sm:items-center justify-between gap-1.5 cursor-pointer`}
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <div className="flex items-start sm:items-center gap-1.5">
                                            <p className={`${openIndex === index ? 'font-bold font-poppins' : 'font-normal font-Montserrat'} text-white text-base sm:text-lg`}>{item.q}</p>
                                            <h3 className={`${openIndex === index ? 'font-medium' : 'font-normal'} text-white font-poppins text-base sm:text-lg`}>{item.title}</h3>
                                        </div>
                                        <Icon icon={`${openIndex === index ? 'UpIcon' : 'DownIcon'}`} />
                                    </div>
                                    {openIndex === index && (
                                        <div className="accordion-content flex items-start gap-3 px-[19px] pb-4">
                                            <Icon icon="RightArrow" className="mt-1" />
                                            <p className='text-white font-poppins text-base sm:text-lg font-normal opacity-70'>{item.content}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="xl:pt-14 -mt-1">
                    <div className="xl:mt-14 flex flex-row flex-wrap">
                        <div className=" md:w-8/12 w-full px-3">
                            <img src={logo} alt="logo" />
                            <p className=' mt-3 max-w-[367px] font-poppins font-normal text-white text-base opacity-70 leading-[28px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim.
                            </p>
                            <div className=" pt-7 -mt-px flex items-center gap-1.5 pb-12">
                                {footer_icon.map((i) => (
                                    <a key={i.id} href={i.link} className='p-px bg-[linear-gradient(116.46deg,_rgba(255,_255,_255,_0.2)_2.09%,_rgba(255,_255,_255,_0.1)_96.43%)]'>
                                        <Icon icon={i.name} className="p-1.5 flex bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] duration-300 ease-linear hover:bg-white hover:shadow-[0_0_15px_#1BABFE]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        {Footer_link.map((e) => (
                            <div key={e.id} className=" md:w-2/12 w-1/2 px-3 flex flex-col justify-center pb-3">
                                <h2 className=' font-Josefin font-normal text-base text-white leading-[29px]'>{e.heading} </h2>
                                <div className="flex flex-col pt-1.5">
                                    {e.heading_box.map((i) => (
                                        <a href="#" className=' mt-1.5 w-fit font-Josefin leading-[29px] font-normal text-white text-base opacity-70'> {i.heading_text} </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <span className=' flex h-px w-full bg-white opacity-10 absolute left-0 bottom-[54px]'></span>
                <div className='mt-[4.5px] text-white opacity-60 gap-[18px] font-Josefin flex justify-center items-center font-normal text-base text-center'>
                    <p>  © Copyright $GILD <span>{current_year}</span></p>
                    <p className=' h-[35px] w-px bg-white flex'></p>
                    <p>Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;
