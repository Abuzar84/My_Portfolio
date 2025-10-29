import {Link, Outlet} from "react-router-dom";
import bgimage from '../assets/backgroundHotel.jpg'


function Home(){
    return(
        <div className="h-screen w-screen">
            <div className="bg-black flex justify-between text-white p-4">
                <h1 className="pl-10">Hotel Theme</h1>
                <nav>
                    <Link to="/Hoteltheme">Home</Link>
                </nav>
            </div>
            <div className="bg-cover bg-center bg-no-repeat h-screen w-full" style={{backgroundImage: `url(${bgimage})`}}>
                
            </div>
        </div>
    )
}
function Hoteltheme() {
    return(
        <div>  
            <Outlet />
        </div>
    )
}
export {Home};
export default Hoteltheme;