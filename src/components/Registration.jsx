import React from "react";
import { Link } from "react-router-dom";
const Registration = () => {
    return (
        <Link to={"./Signup"}>
            <div className="flex justify-center ">
            <button className="text-white px-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer rounded-md bg-white p-1">Register For Event</button>
       </div>
        
        </Link>
    )
}
export default Registration;