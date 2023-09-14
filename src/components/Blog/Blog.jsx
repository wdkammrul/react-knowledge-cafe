import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

//  ***** step-5 props blog******
//  ***** step-14 receive handleAddToBookmarks *****
// ***** step-28 receive handleMarksAsRead*****
const Blog = ({ blog, handleAddToBookmarks, handleMarksAsRead }) => {
    // console.log(blog)

    //  ***** step-6 ******
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;


    return (
        <div className='mb-20'>
            {/*   ***** step-7 set  ****** */}
            <img className='w-full rounded-lg mb-8' src={cover} alt="`Cover picture of the title ${title}`" />

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-3xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='text-2xl'>
                    <span>{reading_time} min read</span>

                    {/* step-8 bookmark add by react icons */}
                    <button
                        //  ***** step-15 onClick call *****
                        onClick={handleAddToBookmarks}
                        className='ml-3 text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl my-6'> {title} </h2>

            {/* *** যেহেতু এখানে একাধিক ইনডেক্স বসবে তাই ম্যাপিং করে নেয়া হলো । *** */}
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-5' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            {/* ***** step-29 ***** */}
            <button

                //***** step-30 set onClick and send reading_time ***** 
                //***** step-35 remove bookmark id pass ******
                onClick={() => handleMarksAsRead(id,reading_time)}
                className='mt-5 text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

//  ***** step - 5 props blog copy prop types react ******
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blog;