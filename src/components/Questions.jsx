import React, { useState } from 'react';
import Icon from './Icon';

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

    return (
        <section className='pt-10 pb-3 -mt-1 bg-Questions bg-cover bg-no-repeat bg-center'>
            <div className="container px-3 2xl:px-0 mt-10 pt-1">
                <h2 className='font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-14'>
                    Frequently Asked <span className='bg-gradient-to-tr from-[#815CC8] to-[#1BABFE] bg-clip-text text-transparent'>Questions</span>
                </h2>
                <div className="flex flex-col items-center">
                    {accordionData.map((item, index) => (
                        <div key={index} className="accordion max-w-[1038px] mt-6 w-full p-px bg-[linear-gradient(90.28deg,_rgba(255,_255,_255,_0.13)_0%,_rgba(255,_255,_255,_0.03)_99.96%)] rounded-md">
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
            </div>
        </section>
    );
};

export default Questions;
