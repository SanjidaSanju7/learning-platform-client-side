import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home/Home";

import Blog from "../Pages/Blog/Blog/Blog";
import FrequentlyAskedQuestions from "../Pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import About from "../Pages/About/About/About";
import CardDetails from "../Pages/Shared/CardDetails/CardDetails";


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
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')

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
                path: '/courses/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }


        ]
    }
])