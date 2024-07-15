import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/pages/notFound/NotFound";
import HomePage from "../components/pages/homepage/HomePage";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";


export const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound/>
    },
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/projects',
                element: <Projects/>
            }


])