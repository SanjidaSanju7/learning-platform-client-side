import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {

    const course = useLoaderData()
    const { image, name, description } = course;

    return (
        <div className='w-4/5 mt-10 mx-auto rounded dark:bg-rose-100'>
            <div className="card lg:card-side bg-base-400 shadow-2xl">
                <figure> <img src={image} alt="Album" /></figure>
                <div className="card-body text-justify">
                    <h1 className="card-title text-3xl title">{name}</h1>
                    <p className='dark:text-slate-900'>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/checkout'><button className="btn btn-primary color-btn">Get Premium Access</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;