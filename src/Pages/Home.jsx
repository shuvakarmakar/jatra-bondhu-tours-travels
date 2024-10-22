import Navbar from "./NavBar";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-2xl">This is Home Page</h1>
            <h3 className="text-lg mx-auto my-auto text-center font-bold">This is a Tours and Travels Website</h3>
            <Service></Service>
        </div>
    );
};

export default Home;    