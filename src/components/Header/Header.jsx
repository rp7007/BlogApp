import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(true);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Blogs",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Blog",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Your Blogs",
      slug: "/user-blogs",
      active: authStatus,
    },
    {
      name: "View Profile",
      slug: "/profile-info",
      active: authStatus,
    },
  ];

  return (
    <header className='bg-gradient-to-r from-gray-800 to-gray-600 py-4 shadow-lg'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center justify-between w-full md:w-auto'>
            <Link to='/' className='flex items-center'>
              <Logo width='80px' />
            </Link>
            <button
              className='md:hidden text-white focus:outline-none'
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <div className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col md:flex-row md:space-x-4'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='text-white px-4 py-2 font-semibold rounded-lg transition-colors duration-300 hover:bg-blue-600'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
          </div>
          {authStatus && (
            <div className='md:flex md:items-center'>
              <LogoutBtn />
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
