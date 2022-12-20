import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import operation1 from "../images/operation1.png";
import Mumbai from "../images/Mumbai.png";
import Kolkata from "../images/Kolkata.png";
import Hyderabad from "../images/Hyderabad.png";
import Banglore from "../images/Bangalore.png";
import Chennai from "../images/Chennai.png";
// import { useState } from 'react';
export default function LocationSlider() {
    // const [slide, setSlide] = useState(initialSlide)
    // const nextSlide = () => {
    //     initialSlide(4)
    // }
    // const prevSlide = () => {
    //     initialSlide(1)
    // }
    const Settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <Slider {...Settings}>
            <div className='content'>
                <img src={operation1} alt="operation1" />
                <p>Delhi NCR</p>
            </div>
            <div className='content'>
                <img src={Mumbai} alt="operation2" />
                <p>Mumbai</p>
            </div>
            <div className='content'>
                <span className="badge badge-warning">Coming Soon</span>
                <img src={Kolkata} alt="operation2" />
                <p>Kolkata</p>
            </div>
            <div className='content'>
                <span className="badge badge-warning">Coming Soon</span>
                <img src={Banglore} alt="operation1" />
                <p>Bengluru</p>
            </div>
            <div className='content'>
                <span className="badge badge-warning">Coming Soon</span>
                <img src={Chennai} alt="operation2" />
                <p>Chennai</p>
            </div>
            <div className='content'>
                <span className="badge badge-warning">Coming Soon</span>
                <img src={Hyderabad} alt="operation2" />
                <p>Hyderabad</p>
            </div>
        </Slider>
    )
}