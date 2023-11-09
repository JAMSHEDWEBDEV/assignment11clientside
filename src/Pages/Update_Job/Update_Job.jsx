import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update_Job = () => {
    const { user } = useContext(AuthContext);
    const myJob = useLoaderData();
    const { _id, job_title, category, deadline, Maximum_Price, Minimum_Price, Description } = myJob || {};

    const navigate = useNavigate();

    const updateJob = e => {
        e.preventDefault();
        const formData = e.target;

        const job_title = formData.job_title.value;
        const category = formData.category.value;
        const Maximum_Price = formData.max_price.value;
        const Minimum_Price = formData.min_price.value;
        const deadline = formData.date.value;
        const Description = formData.description.value;
        const updatedData = {job_title, category, Maximum_Price, Minimum_Price, deadline, Description};

        fetch(`http://localhost:5000/postJobs/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            })
            .then(res =>res.json())
            .then(result =>{
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Successfully updated!",
                        icon: "success",
                        confirmButtonText: "Close"
                    });
                    formData.reset();
                    navigate("/");
                }
            })
            
    };

    

    return (
        <div className='my-10'>
            <div className='my-10'>
                <div className="p-10 bg-base-200">
                    <form onSubmit={updateJob}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input defaultValue={job_title} type="text" name="job_title" placeholder="your job title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select defaultValue={category} name="category" id="" className="h-[50px] rounded border-2 pl-2">
                                    <option value="Web Design">Web Design</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Web development">Web development</option>
                                    <option value="Video Editing">Video Editing</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input readOnly type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <input defaultValue={deadline} type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="price" name="max_price" defaultValue={ Maximum_Price} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="price" name="min_price" defaultValue={ Minimum_Price} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea defaultValue={Description} name="description" placeholder="description" id="" cols="20" rows="5" className="pl-5 pt-5"></textarea>
                        </div>
                        <div>
                            <button className='text-white font-bold py-4 text-xl mt-8 bg-red-400 btn-block rounded-xl'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update_Job;