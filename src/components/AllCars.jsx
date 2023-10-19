import { useEffect, useState } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import ShowCar from "./ShowCar";
import ad1 from "../assets/ad1.jpg"
import ad2 from "../assets/ad2.jpg"
import ad3 from "../assets/adver2.jpg"

const AllCars = () => {
    const [cars, setCars] = useState();
    const name = useParams();
    const allCars = useLoaderData();
    // console.log(name.id);
    // console.log(param);
    // console.log(allCars);

    useEffect(() => {
        const findCar = allCars.filter(selectCars => selectCars.brandName == name.id)
        // console.log(findCar);
        setCars(findCar)
    }, [name.id, allCars])
    console.log(cars)




    return (
        <div className="max-w-[1500px] mx-auto">
            <div>
                <div className="carousel w-full h-[60vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={ad1} className="w-full " />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={ad2}className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={ad3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1500px] mx-auto gap-16 py-24">
                {
                    cars?.map(car => <ShowCar car={car} key={car.name} ></ShowCar>)
                }
            </div>
        </div>
    );
};

export default AllCars;