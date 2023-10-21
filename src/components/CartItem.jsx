import swal from "sweetalert";
import { Rating } from "@material-tailwind/react";

const CartItem = ({ item }) => {
    console.log(item);

    const { image, name, brandName, type, description, price, rating, _id } = item;

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://dream-car-shop-server-i06vlcvw9-nasif07s-projects.vercel.app/allcart/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    swal("DELETE!", "Item deleted successfull please refresh the page!", "success");
                }
            })
    }
    function DefaultRating() {
        // console.log(rating);
        return <Rating value={parseFloat(rating)} />;
        
      }
    return (
        <div className="card bg-base-100 font-kanit border"><img className="h-[260px]" src={image} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{DefaultRating()}</p>
                <div className="card-actions justify-end items-center">
                    <p className="font-bold text-xl">${price}</p>
                    <button onClick={() => handleDelete(item?._id)} className="btn bg-[#45D792]">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;