

import {AiOutlineMail,AiFillPhone} from 'react-icons/ai';
import {FaAddressCard} from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl text-red-500 mb-3 font-bold mt-8'>Contact Us</h1>
                <p className='text-5xl font-bold'>Get In Touch</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <div className="card bg-base-100 shadow-xl"
                    data-aos="flip-left"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="1000">
                    <figure className="px-10 pt-10">
                        <h1 className='text-9xl'><AiOutlineMail /></h1>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Email Address</h2>
                        <p>info@healthcare.com</p>
                        <p>info@healthcare.company.com</p>
                        <div className="card-actions">
                            <button className="btn bg-red-400 font-bold">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl"
                    data-aos="flip-left"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="2000">
                    <figure className="px-10 pt-10">
                        <h1 className='text-9xl'><AiFillPhone /></h1>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Phone Number</h2>
                        <p>+2(305) 587-3407</p>
                        <p>+2(305) 587-3407</p>
                        <div className="card-actions">
                            <button className="btn font-bold bg-red-400">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl"
                    data-aos="flip-left"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="3000">
                    <figure className="px-10 pt-10">
                        <h1 className='text-9xl'><FaAddressCard /></h1>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Office Address</h2>
                        <p>Discover St, New York,</p>
                        <p>NY 10012, USA</p>
                        <div className="card-actions">
                            <button className="btn font-bold bg-red-400">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;