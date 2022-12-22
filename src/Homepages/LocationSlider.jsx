import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import operation1 from "../images/operation1.png";
import Mumbai from "../images/Mumbai.png";
import Kolkata from "../images/Kolkata.png";
import Hyderabad from "../images/Hyderabad.png";
import Banglore from "../images/Bangalore.png";
import Chennai from "../images/Chennai.png";
export default function LocationSlider() {
    const Settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots:true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
            <div>
                <div className='content'>
                    <img src={operation1} alt="operation1" />
                    <p>Delhi NCR</p>
                </div>
            </div>
            <div>
                <div className='content'>
                    <img src={Mumbai} alt="operation2" />
                    <p>Mumbai</p>
                </div>
            </div>
            <div>
                <div className='content'>
                    <span className="badge badge-warning">Coming Soon</span>
                    <img src={Kolkata} alt="operation2" />
                    <p>Kolkata</p>
                </div>
            </div>
            <div>
                <div className='content'>
                    <span className="badge badge-warning">Coming Soon</span>
                    <img src={Banglore} alt="operation1" />
                    <p>Bengluru</p>
                </div>
            </div>
            <div>
                <div className='content'>
                    <span className="badge badge-warning">Coming Soon</span>
                    <img src={Chennai} alt="operation2" />
                    <p>Chennai</p>
                </div>
            </div>

            <div>
                <div className='content'>
                    <span className="badge badge-warning">Coming Soon</span>
                    <img src={Hyderabad} alt="operation2" />
                    <p>Hyderabad</p>
                </div>
            </div>

        </Slider>
        //     <Slider {...settings}>
        //     <div>
        //     <div className='content'>
        //             <img src={operation1} alt="operation1" />
        //             <p>Delhi NCR</p>
        //         </div>
        //     </div>
        //     <div>
        //       <h3>2</h3>
        //     </div>
        //     <div>
        //       <h3>3</h3>
        //     </div>
        //     <div>
        //       <h3>4</h3>
        //     </div>
        //     <div>
        //       <h3>5</h3>
        //     </div>
        //     <div>
        //       <h3>6</h3>
        //     </div>
        //   </Slider>
    )
}