import { useLoaderData } from "react-router-dom";
import CartItem from "../components/CartItem";

const Mycart = () => {
    const cartItem = useLoaderData();
    // console.log(cartItem);
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="text-center font-kanit">
                <h1 className="font-bold text-4xl lg:text-6xl py-12"><span className="text-[#45D792]">Here</span> your added product</h1>
                <p className="md:text-xl mb-12">Be Happy be glad</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16 px-6 lg:px-0">
                {
                    cartItem.map(item => <CartItem key={item.id} item={item}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Mycart;