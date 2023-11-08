import { useEffect, useState } from "react";
import Job_cart from "../Job_Cart/Job_cart";

const Post_job = () => {
    const [myPostJobs, setMyPostJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/postJobs')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setMyPostJobs(data);
        })
    },[])

    return (
        <div>
            <h1 className="text-2xl text-center my-6 font-bold">Total post jobs: {myPostJobs.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    myPostJobs.map(job => 
                    <Job_cart
                     key={job._id}
                      job={job}
                      ></Job_cart>)
                }
            </div>
        </div>
    );
};

export default Post_job;