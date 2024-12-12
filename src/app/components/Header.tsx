import React from 'react'
import { ImSearch } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
<>
  &lt;
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
     
        <span className="ml-3 text-xl">Hekto</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-red-900">Home</a>
        <a className="mr-5 hover:text-gray-900">Pages</a>
        <a className="mr-5 hover:text-gray-900">Products</a>
        <a className="mr-5 hover:text-gray-900">Blog</a>
        <a className="mr-5 hover:text-gray-900">Shop</a>
        <a className="mr-5 hover:text-gray-900">Contact</a>
        
      </nav>
     
     <input type='text' placeholder='Search' className='w-[200px]' >
     </input>
     <ImSearch className='text-black size-5' />
     <FaRegHeart className='text-black size-6 mx-3' />
     <IoCartOutline className='text-black size-6 mx-3' />
    </div>
  </header>
</>


  </div>


  )
}

export default Header