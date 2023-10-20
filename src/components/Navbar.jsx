import { Link, NavLink } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

// import carLogo from "../assets/carlogo.png"

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext)
    // console.log(user);

    const handleLogOut = () => {
        logOut();
    }


    const items = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#45D792]  underline" : ""}>Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/addproduct" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#45D792]  underline" : ""}>Add Product
            </NavLink>
        </li>
        <li>
            <NavLink to="/mycart" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#45D792]  underline" : ""}>My Cart
            </NavLink>
        </li>
        <li>
            <NavLink to="/signup" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#45D792]  underline" : ""}>Sign UP
            </NavLink>
        </li>



    </>
    return (
        <div className=" bg-[#13141A]">
            <div className="navbar max-w-[1500px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-kanit">
                            {items}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <IoCarSport className="text-5xl text-[#45D792]"></IoCarSport>
                        <h4 className="text-4xl font-bold text-white font-kanit">DREAM CAR</h4>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-7 text-lg font-medium px-1 text-white font-kanit">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <h1 className="mr-2 font-semibold text-lg text-white">{user.displayName}</h1> : <h1></h1>
                    }
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={`${user?.photoURL}`} />
                                    : ""
                            }
                        </div>
                    </label>
                    {

                        user ?
                            <button onClick={handleLogOut} className="btn ml-4">Log out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;