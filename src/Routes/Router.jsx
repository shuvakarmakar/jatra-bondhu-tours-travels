import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import TermsandConditions from "../Pages/TermsandConditions";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "terms-and-conditions",
        element: <TermsandConditions></TermsandConditions>
    }
]);