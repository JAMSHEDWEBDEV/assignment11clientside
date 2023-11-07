import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero h-[550px] mt-6 bg-base-200 mb-9">
            <div className="">
                <div className="lg:ml-[-50px]">
                    <h1 className="text-2xl lg:text-5xl font-bold my-5">Login to Exertio World</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="px-5 text-center">
                        <p className="text-[16px] font-bold mb-5"> Do not have an account ? <span className="text-red-500"><Link to="/register">Register here</Link></span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;