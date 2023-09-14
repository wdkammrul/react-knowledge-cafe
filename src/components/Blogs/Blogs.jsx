import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

// ***** step-12 props *****
//***** step-26 ‍props receive handleMarksAsRead *****
const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {

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
            {/* <h3 className="text-4xl mb-8">Blogs:{blogs.length}</h3> */}

            {/* ***** step-4 mapping *****  */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    // ***** step-13 *****
                    handleAddToBookmarks={() => handleAddToBookmarks(blog)}

                    // ***** step-27 *****
                    handleMarksAsRead={handleMarkAsRead}
                ></Blog>)
            }

        </div>
    );
};


Blogs.prototypes = {
    handleAddToBookmarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blogs; 