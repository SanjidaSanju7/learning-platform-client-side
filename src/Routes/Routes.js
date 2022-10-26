import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home/Home";

import Blog from "../Pages/Blog/Blog/Blog";
import FrequentlyAskedQuestions from "../Pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import About from "../Pages/About/About/About";


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/FAQ',
                element: <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            },
            {
                path: '/about',
                element: <About></About>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course-categories/:id',
                element: <Courses></Courses>
            }

        ]
    }
])