import React, { Component } from "react";
import Slider from "react-slick";
import { BiSolidQuoteAltRight } from 'react-icons/bi'
import Img01 from './Images/Man1.jpg'
import Img02 from './Images/Man2.jpg'
import Img03 from './Images/Man3.jpg'
import Img04 from './Images/Man4.jpg'
import Img05 from './Images/Man5.jpg'
import Img06 from './Images/Man6.jpg'

const items = [
    {
        Icon: Img01,
        Title: "Karim Rezaul",
        Text: " Owner, sotta, Uk ",
        Sub: "Working with AJux was an absolute pleasure! Their UX/UI design transformed our app, resulting in a significant increase in user engagement and positive feedback.",
    },
    {
        Icon: Img02,
        Title: "Ruger Walter",
        Text: "CEO Of Sharpstone App ",
        Sub: "AJux's app development team is top-notch. They delivered our project on time and exceeded our expectations in terms of functionality and user experience.",
    },
    {
        Icon: Img03,
        Title: "Michael Mark",
        Text: "Business Owner",
        Sub: "Thanks to AJux's strategic business planning, our company witnessed remarkable growth and improved operational efficiency. Highly recommended!",
    },
    {
        Icon: Img04,
        Title: "Lisa Queen",
        Text: "Mobile App Manager",
        Sub: "We partnered with AJux to revamp our outdated app. Their UX/UI expertise breathed new life into our product, resulting in positive user feedback and increased downloads."
    },
    {
        Icon: Img05,
        Title: "Mark Sign",
        Text: "Startup Founder",
        Sub: "AJux's business planning services provided us with a clear roadmap for success. Their strategic insights helped us navigate challenges and achieve our goals."
    },
    {
        Icon: Img06,
        Title: "Sophia",
        Text: "UX Researcher",
        Sub: "The design solutions provided by AJux showcased their creativity and understanding of user behavior. Our app now stands out in a crowded market.",
    },

]
export default class AutoPlayMethod extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            centerPadding: "60px",
            className: "center",
            responsive: [
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        return (
            <div>
                <div className="relative pt-3">
                    <Slider ref={slider => (this.slider = slider)} {...settings} className="overflow-hidden">
                        {items.map((items, index) => (
                            <div className="text py-10 cursor-grab bg-" key={index}>
                                <div className="mx-3 lg:px-12 md:px-10 sm:px-6 shadow-lg rounded-2xl" >
                                    <div className="quote ml-[93%] pb-5">
                                        <BiSolidQuoteAltRight className="text-4xl text-gray-300 float-left"/>
                                    </div>
                                    <p className="py-2 lg:text-xl md:text-sm sm:text-sm text-black">{items.Sub}</p>
                                    <div className="cont flex py-10">
                                        <img src={items.Icon} alt="" className="lg:w-[13%] md:w-[19%] sm:w-[23%] my-auto rounded-full lg:h-[3rem] md:h-[3rem] sm:h-[4rem]" />
                                        <div className="text ml-2">
                                            <p className="text-xl font-bold text-black p">{items.Title}</p>
                                            <p className="text-sm text-black">{items.Text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}