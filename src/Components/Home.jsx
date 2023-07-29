import React from "react";
import Img01 from "./Images/Bg.png";
import Img02 from "./Images/Man1.jpg";
import Img03 from "./Images/Man2.jpg";
import Img04 from "./Images/Man3.jpg";
import Img08 from "./Images/Man4.jpg";
import Img09 from "./Images/Man5.jpg";
import Img10 from "./Images/Man6.jpg";
import Img11 from "./Images/Man7.jpg";
import Img05 from "./Images/01.jpg";
import Img06 from "./Images/02.jpg";
import Img07 from "./Images/03.jpg";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Counting from "./Counting";

function Home() {
    const fact = [
        {
            icon: Img05,
            title: "Business Strategy",
            desc: "Business strategy is a powerful instrument that directs goal-achieving by outlining procedures and strategies and coordinating efforts..",
        },
        {
            icon: Img06,
            title: "UX/UI Design",
            desc: "Embrace the business plan as your design compass, crafting impactful user experiences that align with goals and objectives.",
        },
        {
            icon: Img07,
            title: "App Development",
            desc: "A clearly defined company strategy serves as the basis for developing effective apps that support goals as an app developer.",
        },
    ];

    const Team = [
        {
            Image: Img08,
            title: "Rezaul Karim",
            desc: "UX Researcher",
        },
        {
            Image: Img09,
            title: "Tanvir Mike",
            desc: "Product Designer",
        },
        {
            Image: Img10,
            title: "Smart Stone",
            desc: "Cyber security",
        },
        {
            Image: Img11,
            title: "Josh Bidden",
            desc: "CEO of Ajux",
        },
    ]

    return (
        <div className="sel selection:bg-pink-600 selection:text-white ">
            <img
                src={Img01}
                alt=""
                className="w-full lg:h-[50rem] md:h-[50rem] sm:h-[30rem] scroll-smooth object-cover top-0"
            />
            <div className="content lg:-mt-[40%] md:-mt-[75%] sm:-mt-[90%] grid lg:grid-cols-2 md:grid-cols-1 mx-[6%] py-[2%]">
                <div className="contentOne py-[10%]">
                    <p className="flex text-lg tracking-wider italic font-thin">
                        <FaLongArrowAltRight className="text-pink-600 text-2xl w-10" />
                        Wellcome to<span className="text-pink-600 ml-1"> Ajux</span>
                    </p>
                    <p className="lg:text-7xl md:text-6xl sm:text-3xl tracking-widest font-semibold py-2 text-black/80">
                        Impact the World <br /> <span className="">by Taking Action</span>
                    </p>
                    <p className=" tracking-wider lg:text-sm md:text-sm sm:text-xs pt-1 font-semibold font-serif">
                        Build immersive brands to take advantage of change
                    </p>
                    <Link to="/">
                        <button className="text-white lg:py-4 md:py-4 sm:py-3 mt-5 lg:w-[30%] md:w-[30%] sm:w-[40%] sm:mx-auto lg:text-2xl md:text-2xl sm:text-xl cursor-pointer lg:px-10 md:px-10 sm:px-5 rounded-lg bg-pink-600">
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className="contentOne lg:grid lg:grid-cols-2  md:hidden sm:hidden">
                    <div className="one my-auto">
                        <img
                            src={Img02}
                            alt=""
                            className="w-[65%] shadow-2xl ml-28 rounded-2xl my-4"
                        />
                        <img
                            src={Img03}
                            alt=""
                            className="w-[65%] shadow-2xl ml-28 rounded-2xl my-4"
                        />
                    </div>
                    <div className="sec">
                        <img
                            src={Img04}
                            alt=""
                            className="h-[30rem] w-[100%] shadow-2xl rounded-2xl object-fill"
                        />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mx-[6%] gap-10 py-5">
                {fact.map((fact, index) => {
                    return (
                        <div className=" h-auto" key={index}>
                            <div className="flex shadow-2xl bg-white/90 rounded-3xl py-10 mx-[1%] lg:mt-[40%] md:mt-[7%] z-50">
                                <div className="ml-5 lg:mt-5 py-1 duration-200 ease-in-out cursor-pointer md:mt-3 sm:mt-2 whitespace-break-spaces">
                                    <img
                                        src={fact.icon}
                                        alt=""
                                        className=" w-24 bg rounded-3xl mx-auto p-6"
                                    />
                                    <h1 className="lg:text-2xl text-center md:text-3xl sm:text-2xl capitalize font-bold pt-3">
                                        {fact.title}
                                    </h1>
                                    <h1 className=" lg:text-lg px-10 text-center md:text-2xl capitaliz sm:text-sm lg:py-4 md:py-4 sm:py-1 w-full">
                                        {fact.desc}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="aboutUs grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 mx-[6%] my-32">
                <div className=" py-[6%]">
                    <p className="flex contentOne text-lg tracking-wider font-thin">
                        <FaLongArrowAltRight className="text-pink-600 text-2xl w-10" />
                        About Us
                    </p>
                    <p className="lg:text-5xl md:text-5xl sm:text-4xl contentOne tracking-widest font-semibold py-2 text-black/80">
                        Insights about <br /> <span className="">our company</span>
                    </p>
                    <p className="font-semibold text-sm py-2">
                        AJUX, is a versatile tech company, excels in UX/UI design, app
                        development, and strategic business planning. With a passion for
                        innovation, we deliver seamless user experiences and transformative
                        digital solutions, driving clients' success in the fast-paced tech
                        landscape.
                    </p>
                    <Link href="/aboutus" className="flex text-pink-600 py-3 font-bold lg:text-xl md:text-xl sm:text-lg"><button type='submit'>Learn More</button><FaLongArrowAltRight className="text-pink-600 lg:text-2xl md:text-2xl sm:text-xl mt-2 w-10" /></Link>
                    <Counting />
                </div>
                <div className="img sm:hidden md:block lg:block">
                    <img src={Img02} alt="" className="rounded-3xl" />
                </div>
            </div>
            <div className="Team bg-pink-600/5">
                <h1 className="text-center lg:text-4xl md:text-3xl sm:text-2xl font-semibold border-b-2 pt-5 lg:mx-[40%] md:mx-[50%] sm:mx-[30%] border-pink-600">Our Team</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:mx-[6%] md:mx-[6%] sm:mr-[6%] gap- py-5">
                    {Team.map((Team, index) => {
                        return (
                            <div className=" h-auto" key={index}>
                                <div className="mt-[0%] ">
                                    <div className="ml-5  lg:mt-5 py-1 rounded-2xl duration-200 ease-in-out cursor-pointer md:mt-3 sm:mt-2 whitespace-break-spaces">
                                        <img
                                            src={Team.Image}
                                            alt=""
                                            className="h-[20rem] object-cover rounded-t-3xl w-[170%]"
                                        />
                                        <h1 className="lg:text-xl bg-white pl-2 md:text-3xl sm:text-2xl capitalize font-bold pt-6">
                                            {Team.title}
                                        </h1>
                                        <h1 className=" lg:text-sm rounded-b-2xl bg-white pl-2 md:text-2xl capitaliz sm:text-sm lg:py-3 md:py-4 sm:py-1 w-full">
                                            {Team.desc}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
