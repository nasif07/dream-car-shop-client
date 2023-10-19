import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import AllBrand from "../components/AllBrand";
import ChooseUs from "../components/ChooseUs";
import UpcomingCars from "../components/UpcomingCars";

const Home = () => {
    const carBrands = useLoaderData();
    // console.log(carBrands);
    return (
        <div>
            <Banner></Banner>
            <AllBrand carBrands={carBrands}></AllBrand>
            <ChooseUs></ChooseUs>
            <UpcomingCars></UpcomingCars>
        </div>
    );
};

export default Home;