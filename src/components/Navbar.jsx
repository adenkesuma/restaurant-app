import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../constants/images'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <nav className="w-full flex justify-center items-center bg-[#1a1a1a] py-[1rem] px-[2rem]">
      <div className="flex justify-start items-center w-[100px] md:w-[130px]">
        <img src={images.gericht} alt="w-full" />
      </div>
      <ul className="flex flex-1 justify-center gap-[2rem] items-center list-none">
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#awards">Awards</a>
        </li>
        <li className="cursor-pointer text-[#ffffff] hover:text-gray-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-end items-center">
        <a href="#login" className="text-[#ffffff] hover:text-gray-400">Log In / Registration</a>
      </div>
      <div className="block lg:hidden">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="">
            <MdOutlineRestaurantMenu fontSize={27} className="" onClick={() => setToggleMenu(false)} />
            <ul className="">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar