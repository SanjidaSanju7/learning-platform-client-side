import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../Shared/CourseSummary/CourseSummary';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const Courses = () => {

    const allCourse = useLoaderData()

    return (
        <div className='mt-8'>
            <div className="flex lg:flex-row sm:flex-col">
                <div className="basis-3/12 text-center font-semibold p-5">
                    <LeftSideBar></LeftSideBar>
                </div>

                <div className="basis-9/12">
                    <div className='grid lg:grid-cols-2 gap-8'>
                        {
                            allCourse.map(course => <CourseSummary
                                key={course.id}
                                course={course}
                            > </CourseSummary>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Courses;