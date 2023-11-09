import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Add_Job = () => {

    const { user } = useContext(AuthContext);

    const handleAddJob = e =>{
        e.preventDefault();
        const form = e.target;
        const job_title = form.job_title.value;
        const job_category = form.category.value;
        const email = user?.email;
        const deadline = form.date.value;
        const max_price = form.max_price.value;
        const min_price = form.min_price.value;
        const description = form.description.value;
        const postJob = {
            job_title: job_title,
            category: job_category,
            email: email,
            deadline: deadline,
            Maximum_Price: max_price,
            Minimum_Price:min_price,
            Description: description
        }
        console.log(postJob);
        fetch('https://exertio-jobsmarket-server.vercel.app/postJobs',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postJob)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                toast.success('Your Jobs added successfully.Thank You');
            }
            e.target.reset();
        })
  }    

    return (
        <div className='my-10'>
            <div className='my-10'>
                <div className="p-10 bg-base-200">
                    <form onSubmit={handleAddJob}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" name="job_title" placeholder="your job title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select name="category" id="" className="h-[50px] rounded border-2 pl-2">
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
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="price" name="max_price" defaultValue={'$ '} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="price" name="min_price" defaultValue={'$ '} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" placeholder="description" id="" cols="20" rows="5" className="pl-5 pt-5"></textarea>
                        </div>
                        <div>
                            <button className='text-white font-bold py-4 text-xl mt-8 bg-red-400 btn-block rounded-xl'>Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add_Job;