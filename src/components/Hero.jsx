import React, { useState, useEffect } from 'react';
import { Hand } from '../icon';

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
        <section className="min-h-screen bg-hero-bg bg-cover bg-no-repeat bg-center flex items-center">
            <div className="container px-3">
                <div className="flex flex-col items-center">
                    <h2 className="font-poppins font-normal text-7xl text-center text-white leading-[92px] max-w-[1140px]">
                        There are games... And then
                        there are <span className="text-[#1BABFE]">Gilded</span> Games
                    </h2>
                    <div className="flex gap-4 mt-5">
                        <div className="font-semibold font-Josefin text-4xl text-[#1BABFE]">
                            <span>{timeRemaining.days}</span>
                            <span>d</span>
                        </div>
                        <div className="font-semibold font-Josefin text-4xl leading-[12px] text-[#1BABFE] flex flex-col">
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <div className="font-semibold font-Josefin text-4xl text-white">
                            <span>{timeRemaining.hours}</span>
                            <span>hr</span>
                        </div>
                        <div className="font-semibold font-Josefin text-4xl leading-[12px] text-white flex flex-col">
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <div className="font-semibold font-Josefin text-4xl text-white">
                            <span>{timeRemaining.minutes}</span>
                            <span>min</span>
                        </div>
                        <div className="font-semibold font-Josefin text-4xl leading-[12px] text-white flex flex-col">
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <div className="font-semibold font-Josefin text-4xl text-white">
                            <span>{timeRemaining.seconds}</span>
                            <span>sec</span>
                        </div>
                    </div>
                    <p className=' font-Josefin font-medium text-lg text-white'>
                        Remaining Presale Time
                    </p>
                    <div className=" flex gap-6 items-center mt-[22px]">
                        <button className=' py-[14px] px-[34px] font-Josefin font-normal text-white text-2xl shadow-[0px_0px_0px_1px_white] rounded-[79px] duration-300 ease-linear hover:bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:border-transparent hover:shadow-[0px_8px_30px_0px_#1BABFE] flex gap-2.5 items-center'>
                            <span>
                                <Hand />
                            </span>
                            Presale
                        </button>
                        <button className=' py-[14px] px-[34px] font-Josefin font-normal text-white text-2xl shadow-[0px_0px_0px_1px_white] rounded-[79px] duration-300 ease-linear hover:bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:border-transparent hover:shadow-[0px_8px_30px_0px_#1BABFE]'>
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
