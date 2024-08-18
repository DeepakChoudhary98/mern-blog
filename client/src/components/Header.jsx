import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar fluid={true} rounded={true} className='border-b-2 shadow-md'>
      <Navbar.Brand>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Deepak's
          </span> Blog
        </Link>
      </Navbar.Brand>
      
      <div className='flex justify-between items-center w-full md:w-auto'>
        <form className='hidden lg:block'>
          <TextInput 
            type='text' 
            placeholder='Search...' 
            icon={AiOutlineSearch} 
            className='w-64'
          />
        </form>
        <Button className='lg:hidden w-12 h-10' color='gray' pill> 
          <AiOutlineSearch />
        </Button>
      </div>

      <div className='flex gap-2 md:order-2'>
        <Button className="hidden sm:flex items-center w-12 h-10" color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className='mt-2 md:mt-0'>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/' className='text-gray-700 dark:text-white'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to='/about' className='text-gray-700 dark:text-white'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to='/projects' className='text-gray-700 dark:text-white'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}