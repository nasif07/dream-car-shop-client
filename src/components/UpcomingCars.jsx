import recent1  from "../assets/recent-launch-car-1.png"
import recent2  from "../assets/recent-launch-car-2.png"
import recent3  from "../assets/recent-launch-car-3.png"
import recent4  from "../assets/recent-launch-car-4.png"
const UpcomingCars = () => {
    return (
        <div className="max-w-[1500px] mx-auto pt-16">
            <div className="text-center font-kanit">
                <h1 className="font-bold text-4xl md:text-6xl pb-8"><span className="text-[#45D792]">Upcoming</span> Cars</h1>
                <p className="md:text-xl mb-12">Here are some of the featured cars in different categories</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 px-10 lg:px-0 pb-16 pt-4">
                <div className="card  font-kanit text-center border">
                    <figure><img className="pt-6" src={recent1}/></figure>
                    <div className="card-body">
                        <h2 className=" text-center font-bold text-2xl">Huanda-sanata-2023</h2>
                        <p className="text-lg font-medium">$67,543.00</p>
                    </div>
                </div>
                <div className="card  font-kanit text-center border">
                    <figure><img className="pt-6" src={recent2}/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">BMW 7 series 2023</h2>
                        <p className="text-lg font-medium">$42,543.00</p>
                    </div>
                </div>
                <div className="card  font-kanit text-center border">
                    <figure><img className="pt-6" src={recent3}/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Tesla-crown-2023</h2>
                        <p className="text-lg font-medium">$56,543.00</p>
                    </div>
                </div>
                <div className="card  font-kanit text-center border">
                    <figure><img className="pt-6" src={recent4}/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Jeep-rsc-2023</h2>
                        <p className="text-lg font-medium">$33,543.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCars;