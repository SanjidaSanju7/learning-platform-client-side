import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home/Home";

import Blog from "../Pages/Blog/Blog/Blog";
import FrequentlyAskedQuestions from "../Pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import About from "../Pages/About/About/About";
import CardDetails from "../Pages/Shared/CardDetails/CardDetails";
import CheckOutPage from "../Pages/Shared/CheckOutPage/CheckOutPage";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";


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
            },
            {
                path: '/checkout',
                element: <CheckOutPage></CheckOutPage>,
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])