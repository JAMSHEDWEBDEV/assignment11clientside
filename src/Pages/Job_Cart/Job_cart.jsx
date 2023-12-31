import { Link } from "react-router-dom";

const Job_cart = ({ job,handleDelete }) => {

    const { _id, job_title, category, email,deadline,Maximum_Price,Minimum_Price,Description } = job || {};

    return (
        <div>
            <div className="card h-[500px] bg-base-100 shadow-xl border-2">
                <div className="card-body">
                    <h2 className="card-title">Job-Title : {job_title}</h2>
                    <h2 className="card-title">Category : {category}</h2>
                    <p>User-Email : {email}</p>
                    <p>Maximum-Price : {Maximum_Price}</p>
                    <p>Minimum-Price : {Minimum_Price}</p>
                    <p className="font-bold text-red-700">Deadline : {deadline}</p>
                    <p>Short Description : {Description}</p>
                    <div className="flex justify-between">
                        <div>
                            <button 
                            onClick={()=>handleDelete(_id)}
                            className="btn bg-red-400"
                            >Delete</button>
                        </div>
                        <div>
                            <Link to={`/update/${_id}`}><button className="btn bg-red-400">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job_cart;