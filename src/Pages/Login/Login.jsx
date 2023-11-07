import { Link } from "react-router-dom";
import { FaRegHandPointRight } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
            if(result){
                toast.success('successfully logged in');
            }
        })
        .catch(error =>{
            if(error){
                toast.error('Opps!This email already used');
            }
        })
    }

    return (
        <div className="hero min-h-screen mt-6 bg-base-200 pb-8 mb-8">
            <div className="">
                <div className="lg:ml-[-50px]">
                    <h1 className="text-2xl lg:text-5xl font-bold my-5">Login to Exertio World</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                            name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" 
                            placeholder="password"
                            name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center underline underline-offset-4 mb-4 font-bold">OR</p>
                        <p className="text-center font-bold flex gap-3 justify-center items-center">Sign In With <span className="text-indigo-800 font-bold text-2xl"><FaRegHandPointRight/></span> <Link><span className="text-xl text-red-500 font-bold">Google</span></Link> </p>
                        <div className="divider"></div>
                    </div>
                    <div className="px-5 text-center">
                        <p className="text-[16px] font-bold mb-5"> Do not have an account ? <span className="text-red-500"><Link to="/register">Register here</Link></span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;