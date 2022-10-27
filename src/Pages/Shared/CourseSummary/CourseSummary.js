import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {

    const { name, publisher, image, description, rating, total_view, id } = course;


    return (

        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-xl dark:text-gray-100 bg-rose-100">
            <div className="flex space-x-4">
                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1 font-semibold">
                    <h2>Publisher: {publisher}</h2>
                    <p className="dark:text-gray-400 flex gap-3">
                        Total Views: {total_view}</p>
                </div>
            </div>
            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded" />
                <h2 className="mb-1 text-2xl font-semibold title">{name}</h2>
                <p className="text-sm dark:text-gray-400">
                    {
                        description.length > 100 ?
                            <span>{description.slice(0, 100) + '...'}
                                <Link className='text-primary'>Read More</Link></span>
                            :
                            <span>{description}</span>
                    }

                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <button aria-label="Share this post" type="button" className="flex items-center p-1 space-x-1.5">
                        <FaEye></FaEye>  <h2 className=''> {total_view} views</h2>
                    </button>
                </div>
                <div className="flex space-x-2 text-sm dark:text-gray-400">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <h2 className=''> {rating}</h2>  <FaStar className='text-warning' />
                    </button>
                </div>
            </div>
            <Link to={`/courses/${id}`}><button className='btn w-full color-btn'>Course Details</button></Link>
        </div>


    );
};

export default CourseSummary;