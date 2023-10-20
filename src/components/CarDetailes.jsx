import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CarDetailes = () => {

    const [car, setCar] = useState();


    const id = useParams();
    const allCars = useLoaderData();

    useEffect(() => {
        const findCar = allCars?.find(selectCarDetailes => selectCarDetailes._id == id.id)
        // console.log(findCar);
        setCar(findCar)
    }, [id.id, allCars])
    console.log(car);

    // console.log(id, allCars);

    // const { image, name, brandName, type, description, price, rating, _id } = car;


    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="text-center font-kanit pt-12">
                <h1 className="font-bold text-6xl pb-8"><span className="text-[#45D792]">Here</span> Your Dream Car Details</h1>
                <p className="text-xl mb-12">Buy car Buy happiness</p>
            </div>
            <div className="card max-w-[600px] mx-auto border mb-16 font-kanit">
                <img className="p-12" src={car?.image}/>
                <div className="card-body">
                    <h2 className="card-title pb-4"><span className="text-[#45D792] text-3xl font-bold">Model:</span>{car?.name}</h2>
                    <p><span className="text-[#45D792] font-bold">Brand: </span>{car?.brandName}</p>
                    <p><span className="text-[#45D792] font-bold">Type: </span>{car?.type}</p>
                    <p className="pb-10"><span className="text-[#45D792] font-bold">Description: </span>{car?.description}</p>
                    <div className="card-actions justify-between items-center">
                        <h2 className="font-bold text-3xl">${car?.price}.00</h2>
                        <button className="btn bg-[#45D792]">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailes;