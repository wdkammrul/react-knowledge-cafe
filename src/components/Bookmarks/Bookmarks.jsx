import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
// ***** step-18 props receive ****
// ***** step-33 props readingTime ******
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-lg ml-6 mt- pt-5">

            {/* ***** step-34 set readingTime ***** */}
            <h3 className="text-4xl text-center mb-4 text-purple-800 ">Reading Time: {readingTime}</h3>

            <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks?.length}</h2>

            {/* ***** step-19 mapping *****  */}
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;