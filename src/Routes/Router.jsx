import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Sections/Home";
import TermsandConditions from "../Pages/TermsandConditions";
import Invoice from "../Pages/Invoice";
import ETicket from "../Pages/ETicket";
import AboutUs from "../Pages/AboutUs";
import Visa from "../Pages/Visa";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/visa-info",
                element: <Visa></Visa>
            },
            {
                path: "/terms-and-conditions",
                element: <TermsandConditions></TermsandConditions>
            },
            {
                path: "/invoice",
                element: <Invoice></Invoice>
            },
            {
                path: "/eticket",
                element: <ETicket></ETicket>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            }
        ]
    }

]);