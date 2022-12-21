import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../About/About/About';
import './Home.css'


const Home = () => {

    return (

        <section>
            <div className="bg-rose-100" >
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <p className="text-2xl font-bold leading-none sm:text-3xl xl:max-w-2xl dark:text-gray-900">WELCOME TO ACADEMIA</p>
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Best Online Education Expertise</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Ready to learn a programming language and land a new job in the tech field? Check out our list of the best online coding courses to get started.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/'>
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 color-btn">Get started</button>
                        </Link>

                        <Link to='/courses'>
                            <button type="button" className="px-8 py-3 m-2 text-lg border font-semibold rounded dark:border-gray-700 dark:text-gray-800 color-btn">All Courses
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
            </div>
            <About></About>
        </section>

    )
};

export default Home;