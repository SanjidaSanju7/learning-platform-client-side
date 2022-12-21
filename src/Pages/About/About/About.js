import React from 'react';
import image from '../../../assets/images/hero-section.jpg'
import { FaBookOpen, FaCertificate, FaUserGraduate } from "react-icons/fa";
import './About.css'

const About = () => {
    return (
        <section className="">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <p className="mt-3 text-lg title1" >LEARN ANYTHING</p>
                            <p className="text-2xl font-bold tracking-tight sm:text-3xl  title">Benefits About Online <br /> Learning Expertise</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex border-3 shadow-2xl p-3 about-card rounded-md">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaBookOpen className='text-3xl dark: text-black'></FaBookOpen>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-start">
                                        <h4 className="text-lg font-medium leading-6 dark: text-slate-100 ">Online Courses</h4>
                                        <p className="mt-2 dark: text-slate-100">Learn programming with free online courses from real college courses and world's leading universities. Pick up essential coding skills needed for frontend and/or backend web development, machine learning, IOS, Android, and much more.</p>
                                    </div>
                                </div>
                                <div className="flex  border-3 shadow-2xl p-3 about-card rounded-md">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaCertificate className='text-3xl dark:text-black'></FaCertificate>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-start">
                                        <h4 className="text-lg font-medium leading-6 dark: text-slate-100 ">Earn A Certificate</h4>
                                        <p className="mt-2 dark: text-slate-100">Our computer programming certificate can help you develop essential skills needed to help you explore a role in the field of technology and programming. During your time in this program, you will gain the ability to develop logically-structured software solutions through the use of high-level programming languages.</p>
                                    </div>
                                </div>
                                <div className="flex  border-3 shadow-2xl p-3 about-card rounded-md">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaUserGraduate className='text-3xl dark:text-black'></FaUserGraduate>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-start">
                                        <h4 className="text-lg font-medium leading-6 dark: text-slate-100">Learn From Real Professionals</h4>
                                        <p className="mt-2 dark: text-slate-100">Hear what a day in the life of a programmer looks like from interviews with actual people across various disciplines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={image} alt="" className="mx-auto rounded shadow-lg " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;