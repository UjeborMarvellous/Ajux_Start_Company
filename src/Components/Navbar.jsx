import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrTechnology } from 'react-icons/gr'
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import MenuItems from './MenuItems';

function Navbar() {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div>
            <nav className={color ? "transition-opacity delay-150 ease-linear duration-300 bg-white fixed top-0 w-full py-6 translate-y scroll-smooth px-[6%]" : "bg-transparent absolute w-full py-10 px-[6%]"}>
                <div className={color ? " navLinks uppercase flex justify-between" : "navLinks uppercase justify-between flex"}>
                    <div className="logo flex">
                        <GrTechnology className='lg:text-5xl md:text-4xl sm:text-3xl text-pink-600 font-black' />
                        <Link to="/" className='text-pink-600 font-sans font-black lg:text-5xl md:text-4xl sm:text-3xl italic'>Ajux</Link>
                    </div>
                    <div className="Open absolute right-6 top-10 lg:hidden md:hidden scale-150">
                        <FiMenu
                            className="text-2xl text-pink-700 cursor-pointer font-bold md:hidden lg:hidden"
                            onClick={showMenu}
                        />
                    </div>
                    <div className="test my-auto sm:hidden md:hidden lg:block">
                        <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-pink-600' : 'font-mono lg:text-xl md:text-lg sm:text-sm text-black hover:border-b-2 hover:border-pink-600 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Home</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-pink-600' : 'font-mono lg:text-xl md:text-lg sm:text-sm text-black hover:border-b-2 hover:border-pink-600 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>About</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-pink-600' : 'font-mono lg:text-xl md:text-lg sm:text-sm text-black hover:border-b-2 hover:border-pink-600 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Services</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-pink-600' : 'font-mono lg:text-xl md:text-lg sm:text-sm text-black hover:border-b-2 hover:border-pink-600 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Jobs</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-pink-600' : 'font-mono lg:text-xl md:text-lg sm:text-sm text-black hover:border-b-2 hover:border-pink-600 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Pages</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-sm text-black lg:mx-6 md:mx-6 sm:mx-5 hover:border-b-2 hover:border-pink-600' : 'font-mono lg:text-xl md:text-lg sm:text-sm text-black hover:border-b-2 hover:border-pink-600 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Contact Us</Link>
                        <Link to="/" className={color ? 'text-white py-4 font-semibold cursor-pointer px-10 rounded-lg bg-pink-600' : 'text-white py-4 font-semibold cursor-pointer px-10 rounded-lg bg-pink-600'}>Get Started</Link>
                    </div>
                </div>
                    <MenuItems showMenu={showMenu} active={active} />
            </nav>
        </div>
    )
}

export default Navbar