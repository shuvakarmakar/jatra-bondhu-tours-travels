import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Sections/Home";
import TermsandConditions from "../Pages/TermsandConditions";
import Invoice from "../Pages/Invoice";
import ETicket from "../Pages/ETicket";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
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
    }
]);