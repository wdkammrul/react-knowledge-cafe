import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  //***** step-9 *****
  const [bookmarks, setBookmarks] = useState([]);

  //***** step-23 ‍ *****
  const [readingTime, setReadingTime] = useState(0);


  //***** step-10 *****
  const handleAddToBookmarks = blog => {
    // console.log('bookmark adding soon')
    // console.log(blog)


    // ***** step-16 *****
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  //***** step-24 ‍ *****
  // ***** step-36 id add *****
  const handleMarkAsRead = (id, time) => {
    // console.log('marking as read', time)

    //  ***** step-31 *****
    // setReadingTime(readingTime + time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark 
    // console.log('remove bookmark', id)
    // ***** step-37 *****
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>

        {/* * ***** step-11 send handleAddToBookmarks* *****  */}
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}

          // ***** step-25 *****
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>

        {/* ****** step-17 ***** */}
        {/* ****** step-32 send readingTime***** */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
