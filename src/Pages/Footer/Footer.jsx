
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/exertion-logo.svg';
import { BsFacebook, BsTwitter, BsLinkedin, BsBehance } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-700 text-base-content">
                <aside>
                    <img src={footerLogo} alt="footer_image" />
                    <p className='text-orange-100 font-bold'>Exertio Jobsmarket Ltd.<br />Providing reliable tech since 1992</p>
                    <div className='flex gap-6 my-6 text-orange-100 text-3xl'>
                        <Link className='hover:text-red-400'><BsFacebook /></Link>
                        <Link className='hover:text-red-400'><BsTwitter /></Link>
                        <Link className='hover:text-red-400'><BsLinkedin /></Link>
                        <Link className='hover:text-red-400'><BsBehance /></Link>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title text-white">Services</header>
                    <a className="link link-hover text-orange-100 font-bold">Web Development</a>
                    <a className="link link-hover text-orange-100 font-bold">Web Design</a>
                    <a className="link link-hover text-orange-100 font-bold">Digital Marketing</a>
                    <a className="link link-hover text-orange-100 font-bold">Graphic Design</a>
                    <a className="link link-hover text-orange-100 font-bold">Job Post</a>
                </nav>
                <nav>
                    <header className="footer-title text-white">Company</header>
                    <a className="link link-hover text-orange-100 font-bold">About us</a>
                    <a className="link link-hover text-orange-100 font-bold">Contact</a>
                    <a className="link link-hover text-orange-100 font-bold">Jobs</a>
                    <a className="link link-hover text-orange-100 font-bold">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-white">Legal</header>
                    <a className="link link-hover text-orange-100 font-bold">Terms of use</a>
                    <a className="link link-hover text-orange-100 font-bold">Privacy policy</a>
                    <a className="link link-hover text-orange-100 font-bold">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-slate-600 text-white font-bold">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Exertio Jobsmarket Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;