import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";


const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#45D792]">Sign </span> Up</h1>
                    <p className=" text-lg font-medium text-center text-[#676767] mb-9">Please Sign Up to recive our services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={<div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#45D792]">Sign </span> Up</h1>
                    <p className=" text-lg font-medium text-center text-[#676767] mb-9">Please Sign Up to recive our services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input name="name" type="text" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#45D792] text-white my-6">Sign up</button>
                        </div>
                    </form>
                    <p className=" text-center">Or Sign Up using google</p>
                    <button className="flex justify-center"><AiOutlineGoogle className="text-3xl mt-2"></AiOutlineGoogle></button>
                    <p className="text-center mb-7 mt-2">Already have an account <Link className="text=blue-600 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input name="name" type="text" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#45D792] text-white my-6">Sign up</button>
                        </div>
                    </form>
                    <p className=" text-center">Or Sign Up using google</p>
                    <button className="flex justify-center"><AiOutlineGoogle className="text-3xl mt-2"></AiOutlineGoogle></button>
                    <p className="text-center mb-7 mt-2">Already have an account <Link className="text=blue-600 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;