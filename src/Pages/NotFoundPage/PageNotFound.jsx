
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center mt-24">
                <img src="https://i.ibb.co/HBFp0K9/404.png" alt="error_img" />
            </div>
            <div>
                <h1 className="font-bold text-6xl my-7"><span className="text-red-400">Oops!</span>Page Not Found</h1>
                <p className="text-xl">We are sorry, but the page you were looking for does not exist or temporarily unavailable.</p>
            </div>
            <div className="my-10 flex justify-center">
                <Link to="/"><button className="bg-red-400 text-white px-10 py-4 text-2xl font-bold flex items-center gap-6">Go Home <span className='font-extrabold text-4xl text-black'><TfiAngleDoubleRight/></span></button></Link>
            </div>
        </div>
    );
};

export default PageNotFound;