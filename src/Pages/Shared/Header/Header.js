import React, { useContext, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUser } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (

        <div className="px-4 py-5 mx-auto sm:max-w-full text-center md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 navlist">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="academia"
                    title="academia"
                    className="inline-flex items-center"
                >
                    <FaGraduationCap className='text-5xl dark: text-slate-900' ></FaGraduationCap >
                    <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 ">
                        ACADEMIA
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/"
                            aria-label="home"
                            title="home"
                            className="font-bold tracking-wide text-gray-700  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            aria-label="courses"
                            title="courses"
                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/FAQ"
                            aria-label="frequently asked questions"
                            title="frequently asked questions"
                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            FAQ
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            aria-label="about"
                            title="about"
                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            aria-label="blog"
                            title="blog"
                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            aria-label="name"
                            title="name"
                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {
                                user?.uid ?
                                    <>
                                        {user?.displayName}
                                        <button onClick={handleLogOut} className="btn-sm bg-rose-100 rounded ml-3">Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'> Login</Link>
                                        <Link to='/register' className='ml-3'>Register</Link>
                                    </>
                            }
                        </Link>
                    </li>
                    <li >
                        <Link
                            to=""
                            aria-label="user photo"
                            title="user photo"
                            className="font-bold tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {user?.photoURL ?
                                <img style={{ height: '30px' }}
                                    src={user?.photoURL} alt=''

                                >
                                </img>

                                : <FaUser></FaUser>
                            }
                        </Link>
                    </li>
                </ul>



                {/* for mobile responsive */}

                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="academia"
                                            title="academia"
                                            className="inline-flex items-center"
                                        >
                                            <FaGraduationCap className='text-4xl'></FaGraduationCap>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                ACADEMIA
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav className='navlist'>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/courses"
                                                aria-label="courses"
                                                title="courses"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Courses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/FAQ"
                                                aria-label="frequently asked questions"
                                                title="frequently asked questions"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                aria-label="about"
                                                title="about"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                aria-label="blog"
                                                title="blog"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                {
                                                    user?.uid ?
                                                        <>
                                                            {user?.displayName}
                                                            <button onClick={handleLogOut} className="btn-sm bg-pink-800 rounded ml-3">Log out</button>
                                                        </>
                                                        :
                                                        <>
                                                            <Link to='/login'> Login</Link>
                                                            <Link to='/register' className='ml-3'>Register</Link>
                                                        </>
                                                }
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >

    )
};




export default Header;