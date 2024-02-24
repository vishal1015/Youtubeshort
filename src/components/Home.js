import Sidebar from "./Sidebar.js";
import Myvideo from "./Video.js"
// import "../CssFiles/Home.css";
function Homesection(){
    return (
      <div className="main">
        <div className=" side-box">
          <Sidebar />
        </div>
        <div className="video-box">
          <Myvideo />
        </div>
      </div>
    );
}

export default Homesection;