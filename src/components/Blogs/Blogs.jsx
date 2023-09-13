import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    //  ***** step-1 use state *****
    const [blogs, setBlogs] = useState([]);

    // ***** step-2 use Effect *****
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">

            {/* ***** step-3 blogs length then create blog components*****  */}
            <h3>Blogs:{blogs.length}</h3>
        </div>
    );
};

export default Blogs; 