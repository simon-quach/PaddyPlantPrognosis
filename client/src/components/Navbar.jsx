import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="bg-white h-[5rem] flex items-center justify-center px-10 shadow-lg">
        <div className="flex justify-between items-center h-full w-[100rem]">
          <div className="w-[20rem] flex justify-between">
            <Link to="/diseases" className="">Diseases</Link>
            <Link to="/resources" className="">Resources</Link>
            <Link to="/about" className="">About</Link>
          </div>
          <div className="absolute left-[50%]">
            <Link to="/">logo</Link>
          </div>
          <div>
            <button className="bg-[#9ae19f] px-4 py-2 rounded-lg">
              <Link to="/diagnose">Diagnose</Link>  
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar