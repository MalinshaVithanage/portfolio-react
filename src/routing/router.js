import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/pages/notFound/NotFound";
import HomePage from "../components/pages/homepage/HomePage";
import ContactPage from "../components/pages/contact/ContactPage";
import AboutPage from "../components/pages/about/AboutPage";
import ProjectPage from "../components/pages/projects/ProjectPage";


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
                element: <ContactPage/>
            },
            {
                path:'/about',
                element: <AboutPage/>
            },
            {
                path:'/projects',
                element: <ProjectPage/>
            }


])