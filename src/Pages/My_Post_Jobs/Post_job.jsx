import { useEffect, useState } from "react";
import Job_cart from "../Job_Cart/Job_cart";
import Swal from "sweetalert2";

const Post_job = () => {
    const [myPostJobs, setMyPostJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/postJobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyPostJobs(data);
            })
    }, [])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/postJobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job post has been deleted.",
                                icon: "success"
                            })
                            const remaining = myPostJobs.filter(myJob => myJob._id !== id);
                            setMyPostJobs(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className="text-2xl text-center my-6 font-bold">Total post jobs: {myPostJobs.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    myPostJobs.map(job =>
                        <Job_cart
                            key={job._id}
                            job={job}
                            handleDelete={handleDelete}
                        ></Job_cart>)
                }
            </div>
        </div>
    );
};

export default Post_job;