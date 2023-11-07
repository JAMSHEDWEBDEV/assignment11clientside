import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Add_Job from "../Pages/Add_jobs/Add_Job";
import Post_job from "../Pages/My_Post_Jobs/Post_job";
import My_bids from "../Pages/My_Bids/My_bids";
import Bid_Request from "../Pages/Bid_Request/Bid_Request";
import Login from "../Pages/Login/Login";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/add_job",
                element:<Add_Job></Add_Job>
            },
            {
                path:"/post_job",
                element:<Post_job></Post_job>
            },
            {
                path:"/my_bid",
                element:<My_bids></My_bids>
            },
            {
                path:"/bid_request",
                element:<Bid_Request></Bid_Request>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default Router;