import BrandCategory from "./BrandCategory";

const AllBrand = ({carBrands}) => {
    console.log(carBrands);
    return (
        <div className="py-20">
            <div className="text-center font-kanit">
                <h1 className="font-bold text-6xl pb-8"><span className="text-[#45D792]">Search</span> Your Dream Car</h1>
                <p className="text-xl mb-12">There has 6+ Brand Category Available</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto gap-16">
                {
                    carBrands.map(brand => <BrandCategory key={brand.id} brand={brand}></BrandCategory>)
                }
            </div>
        </div>
    );
};

export default AllBrand;