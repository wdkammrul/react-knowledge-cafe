import PropTypes from 'prop-types';

//  ***** step-5 props blog******
const Blog = ({ blog }) => {
    // console.log(blog)

    //  ***** step-6 ******
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;


    return (
        <div>
            {/*   ***** step-7 set  ****** */}
            <img src={cover} alt="`Cover picture of the title ${title}`" />

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                   <span>{reading_time} min read</span>
                </div>
            </div>

            <h2 className='text-4xl'> {title} </h2>

            {/* *** যেহেতু এখানে একাধিক ইনডেক্স বসবে তাই ম্যাপিং করে নেয়া হলো । *** */}
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

//  ***** step - 5 props blog copy prop types react ******
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;