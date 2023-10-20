import { Link } from "react-router-dom";

const ShowCar = ({ car }) => {
    const { image, name, brandName, type, description, price, rating, _id } = car
    return (
        <div className="card border font-kanit">
            <figure><img className="w-[350px] h-[210px]" src={car.image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold pb-2">
                    {name}
                </h2>
                <p>Brand: {brandName}</p>
                <p className="">Type: {type}</p>
                <p className="pb-4">Rating: {rating}/5</p>
                <div className="font-medium text-xl mb-4">${price}</div>
                <div className="flex justify-between">
                    <Link to={`/allcars/carDetailes/${_id}`}>
                        <button className="btn bg-[#45D792]">Details</button>
                    </Link>
                    <button className="btn bg-[#45D792]">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;