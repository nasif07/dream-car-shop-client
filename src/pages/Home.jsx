import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import AllBrand from "../components/AllBrand";

const Home = () => {
    const carBrands = useLoaderData();
    // console.log(carBrands);
    return (
        <div>
            <Banner></Banner>
            <AllBrand carBrands={carBrands}></AllBrand>
        </div>
    );
};

export default Home;