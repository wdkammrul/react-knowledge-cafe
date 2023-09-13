import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

// ***** step-12 props *****
const Blogs = ({ handleAddToBookmarks }) => {

    //  ***** step-1 use state *****
    const [blogs, setBlogs] = useState([]);

    // ***** step-2 use Effect *****
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">

            {/* ***** step-3 blogs length then create blog components*****  */}
            <h3 className="text-4xl mb-8">Blogs:{blogs.length}</h3>

            {/* ***** step-4 mapping *****  */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    // ***** step-13 *****
                    handleAddToBookmarks={handleAddToBookmarks}


                ></Blog>)
            }

        </div>
    );
};

export default Blogs; 