import { Link } from 'react-router-dom'; // or use <a href="/"> if you're not using React Router


const Navbar = () => {
  return (
    <nav className="w-full instrument-serif italic font-normal fixed z-[99999] border-b backdrop-blur-sm border-[#262626] text-secondary px-6 py-4 shadow-sm">
      <div className="flex items-center">
        <Link id='subtitle' to="/" className="text-xl font-semibold text-white ">
          Parth Patel 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;