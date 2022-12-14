import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://educational-website-server-eta.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (

        <div>
            <h2 className='title text-3xl'>All Courses Name</h2>
            <div >
                {
                    categories.map(category => <p className='py-2 text-start ml-5 dark:text-slate-300' key={category.id}><Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)

                }
            </div>
        </div>
    );
};

export default LeftSideBar;