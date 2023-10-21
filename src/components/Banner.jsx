import BGImage from "../assets/bannar2-bg.jpg"
import Marquee from "react-fast-marquee";

const Banner = () => {
    const myStyle = {
        backgroundImage: `url(${BGImage})`,
        backgroundColor: "rgba(0,0,0,0.15)"
    }
    return (
        <>
            <div className="md:h-[85vh] bg-cover h-[70vh]" style={myStyle} >
                <div className="h-[85vh]" style={{ backgroundColor: "rgba(0,0,0,0.60)" }}>
                    <div className="pl-8 ml:pl-0 max-w-[1500px] mx-auto text-white pt-20 md:pt-[200px] font-kanit">
                        <h1 className="mb-5 text-3xl md:text-7xl font-bold">The Largest Car <br /> Marketplace</h1>
                        <p className="mb-10 md:text-xl">Car dealerships may sell new cars from one or several manufacturers, <br /> as well as used cars.</p>
                        <button className="btn hidden md:block text-white bg-[#45D792]">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <Marquee className="bg-[#13141A] h-20">
                    <div className="text-white flex gap-28 font-medium">
                        <p>GET 30% OFFER ON TOYOTA CAR</p>
                        <p>TO GET YOUR DREAM CAR</p>
                        <p>234500 USED CARS AVAILABLE</p>
                        <p>Buy car and Buy happiness</p>
                        <p>GET 30% OFFER ON TOYOTA CAR</p>
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default Banner;

// style={{backgroundColor: "rgba(255, 255, 255, 0.95)"}}





