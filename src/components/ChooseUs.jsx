import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
const ChooseUs = () => {


    return (
        <div className="bg-[#FAF8FB]">
            <div className="py-20 max-w-[1500px] mx-auto">
                <div className="text-center font-kanit">
                    <h1 className="font-bold text-6xl pb-8"><span className="text-[#45D792]">How</span> Does It Work</h1>
                    <p className="text-xl mb-12">Here some reason to choose us</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="card">
                            <div className="card-body items-center text-center">
                                <h2><FaMapLocationDot className="text-7xl text-[#45D792]"></FaMapLocationDot></h2>
                                <h2 className="card-title">Choose Any where</h2>
                                <p className="text-xl">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                                <h2 className="w-10 h-10 pt-2 rounded-full bg-[#45D792] text-white font-bold mt-5">1</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body items-center text-center">
                                <h2><FiPhoneCall className="text-7xl text-[#45D792]"></FiPhoneCall></h2>
                                <h2 className="card-title">Contact With Us</h2>
                                <p className="text-xl">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                                <h2 className="w-10 h-10 pt-2 rounded-full bg-[#45D792] text-white font-bold mt-5">2</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body items-center text-center">
                                <h2><FaRegCreditCard className="text-7xl text-[#45D792]"></FaRegCreditCard></h2>
                                <h2 className="card-title">Pay For The Car</h2>
                                <p className="text-xl">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                                <h2 className="w-10 h-10 pt-2 rounded-full bg-[#45D792] text-white font-bold mt-5">3</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body items-center text-center">
                                <h2><BsFillCarFrontFill className="text-7xl text-[#45D792]"></BsFillCarFrontFill></h2>
                                <h2 className="card-title">Recieve The Car</h2>
                                <p className="text-xl">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                                <h2 className="w-10 h-10 pt-2 rounded-full bg-[#45D792] text-white font-bold mt-5">4</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;