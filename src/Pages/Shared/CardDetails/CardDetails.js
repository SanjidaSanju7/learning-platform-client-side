import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {

    const course = useLoaderData()
    const { image, name, description } = course;

    return (
        <div className='w-4/5 mt-10 mx-auto rounded'>
            <div className="card lg:card-side bg-base-400 shadow-2xl">
                <figure> <img src={image} alt="Album" /></figure>
                <div className="card-body text-justify">
                    <h1 className="card-title text-3xl title">{name}</h1>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary color-btn">Download PDF</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;