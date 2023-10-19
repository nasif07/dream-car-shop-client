import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="error-page">
                <h1 className='text-center font-bold text-5xl py-20'>404 - Page Not Found</h1>
                <p className=' text-center text-md font-semibold'>Sorry, the page you are looking for does not exist.</p>
                <div className='flex justify-center items-center p-20'>
                    <Link to="/"><button className='btn'>Click here to go back to the homepage.</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;