import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowCar from "./ShowCar";
import ad1 from "../assets/ad1.jpg"
import ad2 from "../assets/ad2.jpg"
import ad3 from "../assets/adver2.jpg"

const AllCars = () => {
    const [cars, setCars] = useState();
    const [nodata, setNOdata] = useState();
    const [loading, setLoading] = useState(false)
    const name = useParams();
    const allCars = useLoaderData();
    // console.log(name.id);
    // console.log(param);
    // console.log(allCars);

    useEffect(() => {
        const findCar = allCars.filter(selectCars => selectCars.brandName == name.id)
        // console.log(findCar);
        
        findCar.length > 0 ? setCars(findCar) : setNOdata("Sorry! No available car this time.")
        setLoading(true)

    }, [name.id, allCars, loading])
    console.log(cars)




    return (
        <div className="max-w-[1500px] mx-auto pt-12 px-6 md:px:0">
            <div>
                <div className="carousel w-full h-[220px] md:h-[60vh]">
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
                    cars ? cars.map(car => <ShowCar car={car} key={car.name} ></ShowCar>) : <h1 className="text-5xl text-center col-span-4 p-6 font-bold">{nodata}</h1>
                }
            </div>
        </div>
    );
};

export default AllCars;  