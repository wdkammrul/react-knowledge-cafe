import profile from '../../assets/images/profile1.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-16' src={profile} alt="" />
        </header>
    );
};

export default Header;

