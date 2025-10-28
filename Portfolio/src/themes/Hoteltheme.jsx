import hotel from "../assets/hotel.jpg";

function Home(){
    return(
        <div className="bg-black h-screen w-screen">
            <div className="bg-gray-300 h-100 flex justify-center items-center">
                <div className="grid grid-flow-col grid-rows-2 gap-5 w-150 pt-10">
                    <div className="w-50">
                        <img src={hotel} alt="Hotel LPG for sample" width="300px"/>
                    </div>
                    <div className="w-45">
                        <img src={hotel} alt="Hotel LPG for sample" width="300px"/>
                    </div>
                    <div className="w-60">
                        <img src={hotel} alt="Hotel LPG for sample" width="300px"/>
                    </div>
                   <div className="w-40 flex justify-center items-center">
                        <img src={hotel} alt="Hotel LPG for sample" width="300px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Hoteltheme() {
    return(
        <div>
            <Home/>
        </div>
    )
}
export default Hoteltheme;