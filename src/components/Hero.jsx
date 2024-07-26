import React, { useState, useEffect } from 'react';
import Icon from '../common/Icon';

const Hero = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 16,
        hours: 20,
        minutes: 2,
        seconds: 55,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                const totalSeconds =
                    prevTime.days * 24 * 60 * 60 +
                    prevTime.hours * 60 * 60 +
                    prevTime.minutes * 60 +
                    prevTime.seconds;

                if (totalSeconds <= 0) {
                    clearInterval(timer);
                    return prevTime;
                }

                const newTotalSeconds = totalSeconds - 1;
                const days = Math.floor(newTotalSeconds / (24 * 60 * 60));
                const hours = Math.floor((newTotalSeconds % (24 * 60 * 60)) / (60 * 60));
                const minutes = Math.floor((newTotalSeconds % (60 * 60)) / 60);
                const seconds = newTotalSeconds % 60;

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="xl:min-h-[931px] min-h-screen bg-hero-bg bg-cover bg-no-repeat bg-center flex items-center py-5">
            <div className="container px-3 xl:pt-14 mt-0.5 2xl:px-0">
                <div className="flex flex-col items-center">
                    <h2 className="font-poppins font-normal xl:mt-14 text-3xl xl:text-7xl lg:text-6xl md:text-5xl text-center text-white md:leading-[70px] xl:leading-[92px] max-w-[1140px]">
                        There are games... And then
                        there are <span className="text-Sky_Blue">Gilded</span> Games
                    </h2>
                    <div className="flex sm:gap-4 gap-2 sm:mt-5 mt-2 pt-px">
                        <div className="font-semibold font-Josefin text-2xl sm:text-4xl text-Sky_Blue">
                            <span>{timeRemaining.days}</span>
                            <span>d</span>
                        </div>
                        <div className="font-semibold font-Josefin text-sm leading-none sm:text-4xl sm:leading-[12px] text-Sky_Blue flex flex-col">
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <div className="font-semibold font-Josefin text-2xl sm:text-4xl text-white">
                            <span>{timeRemaining.hours}</span>
                            <span>hr</span>
                        </div>
                        <div className="font-semibold font-Josefin text-sm leading-none sm:text-4xl sm:leading-[12px] text-white flex flex-col">
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <div className="font-semibold font-Josefin text-2xl sm:text-4xl text-white">
                            <span>{timeRemaining.minutes}</span>
                            <span>min</span>
                        </div>
                        <div className="font-semibold font-Josefin text-sm leading-none sm:text-4xl sm:leading-[12px] text-white flex flex-col">
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <div className="font-semibold font-Josefin text-2xl sm:text-4xl text-white">
                            <span>{timeRemaining.seconds}</span>
                            <span>sec</span>
                        </div>
                    </div>
                    <p className=' font-Josefin font-medium text-sm sm:text-lg text-white'>
                        Remaining Presale Time
                    </p>
                    <div className=" flex sm:gap-6 gap-3 items-center mt-[22px] flex-wrap justify-center">
                        <button className=' py-1 sm:py-[10px] px-7 sm:px-[34px] font-Josefin font-normal text-white text-lg sm:text-2xl shadow-[0px_0px_0px_1px_white] rounded-[79px] duration-300 ease-linear hover:bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:border-transparent hover:shadow-[0px_8px_30px_0px_#1BABFE] flex gap-2.5 items-center'>
                            <span>
                                <Icon icon="Hand" />                            </span>
                            Presale
                        </button>
                        <button className=' py-1 sm:py-[10px] px-7 sm:px-[34px] font-Josefin font-normal text-white text-lg sm:text-2xl shadow-[0px_0px_0px_1px_white] rounded-[79px] duration-300 ease-linear hover:bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:border-transparent hover:shadow-[0px_8px_30px_0px_#1BABFE]'>
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
