
const BrandCategory = ({ brand }) => {
    return (
        <div>
            <div className="card bg-base-100 border">
                <figure className="px-10 pt-10">
                    <img src={brand.image} className="rounded-xl w-[300px] h-[190px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-kanit font-semibold text-3xl">{brand.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default BrandCategory;