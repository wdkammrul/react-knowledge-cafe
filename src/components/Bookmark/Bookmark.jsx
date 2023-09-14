import PropTypes from 'prop-types'
// ***** step-20 props receive bookmark *****
const Bookmark = ({bookmark}) => {

    // ***** step-21  *****
    const {title} = bookmark;

    return (
        <div className='bg-slate-100 p-4 m-4 rounded-lg'>
            {/* step-22 set title */}
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;