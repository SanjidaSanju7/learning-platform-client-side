import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/register.jpg'

const Register = () => {
    return (
        <div className="relative">
            <img
                src={image}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                            </p>
                        </div>
                        {/* login form */}
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Register
                                </h3>

                                <form>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            placeholder="Enter Your Full Name"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Photo Url
                                        </label>
                                        <input
                                            placeholder="Photo Url"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="PhotoUrl"
                                            name="PhotoUrl"
                                        />
                                    </div>


                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="Enter Your Email"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="lastName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Enter Your password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-stone-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none color-btn"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm text-center">
                                        Register with social acoounts
                                    </p>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-stone-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none color-btn"
                                        >
                                            <FaGoogle /><h3 className='ml-2'>Sign up with Google</h3>
                                        </button>
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-stone-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none color-btn"
                                        >
                                            <FaGithub /><h3 className='ml-2'>Sign up with Github</h3>
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm text-center">
                                        Already have an acccount? <Link className='title' to='/login'>Log in.</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;