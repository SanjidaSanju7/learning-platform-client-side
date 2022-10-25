import React from 'react';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const Courses = () => {


    return (
        <div className='mt-8'>
            <div class="flex lg:flex-row ">
                <div class="basis-3/12 text-center font-semibold p-5">
                    <LeftSideBar></LeftSideBar>
                </div>

                <div class="basis-9/12">
                    Cards
                </div>
            </div>
        </div >
    );
};

export default Courses;