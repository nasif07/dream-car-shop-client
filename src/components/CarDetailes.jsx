import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const CarDetailes = () => {

    const [car, setCar] = useState();
    const [data, setdata] = useState()


    const id = useParams();
    const allCars = useLoaderData();
    

    useEffect(() => {
        const findCar = allCars?.find(selectCarDetailes => selectCarDetailes._id == id.id)
        // console.log(findCar);
        setCar(findCar)
        const {image, name, brandName, type, description, price, rating} = findCar;
        const cartData = {
            image, name, brandName, type, description, price, rating,
        }
        console.log(cartData);
        setdata(cartData);
    }, [id.id, allCars])
    console.log(data);

    



    const handleAddToCart =() => {
        fetch('https://dream-car-shop-server-i06vlcvw9-nasif07s-projects.vercel.app/allcart', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.acknowledged){
                    swal("Good job!", "added successful in the cart!", "success");
                }
            })
    }

    // 


    // console.log(id, allCars);

    // const { image, name, brandName, type, description, price, rating, _id } = car;
    

    return (
        <div className="max-w-[1500px] mx-auto px-6 md:px-0">
            <div className="text-center font-kanit pt-12">
                <h1 className="font-bold text-4xl md:text-6xl pb-8"><span className="text-[#45D792]">Here</span> Your Dream Car Details</h1>
                <p className="md:text-xl mb-12">Buy car Buy happiness</p>
            </div>
            <div className="card max-w-[600px] mx-auto border mb-16 font-kanit">
                <img className="p-12" src={car?.image}/>
                <div className="card-body">
                    <h2 className="card-title pb-4"><span className="text-[#45D792] text-3xl font-bold">Model:</span>{car?.name}</h2>
                    <p><span className="text-[#45D792] font-bold">Brand: </span>{car?.brandName}</p>
                    <p><span className="text-[#45D792] font-bold">Type: </span>{car?.type}</p>
                    <p><span className="text-[#45D792] font-bold">Description: </span>{car?.description}</p>
                    <div className="card-actions justify-between items-center pt-12">
                        <h2 className="font-bold text-3xl">${car?.price}.00</h2>
                        <button onClick={handleAddToCart} className="btn bg-[#45D792]">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailes;