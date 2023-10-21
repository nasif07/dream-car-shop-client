import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

const ShowCar = ({ car }) => {
    const { image, name, brandName, type, description, price, rating, _id } = car
    function DefaultRating() {
        // console.log(rating);
        return <Rating value={parseFloat(rating)} />;
        
      }
    return (
        <div className="card border font-kanit">
            <figure><img className="w-[350px] h-[210px]" src={car.image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold pb-2">
                    {name}
                </h2>
                <p>Brand: {brandName}</p>
                <p className="">Type: {type}</p>
                <p className="pt-4">{DefaultRating()}</p>
                
                <div className="font-medium text-xl mb-4">${price}</div>
                <div className="flex justify-between">
                    <Link to={`/allcars/carDetailes/${_id}`}>
                        <button className="btn bg-[#45D792]">Details</button>
                    </Link>
                    <Link to={`/updateproduct/${_id}`}>
                        <button className="btn bg-[#45D792]">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;