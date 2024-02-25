import Sidebar from "./Sidebar.js";
import Myvideo from "./Video.js"
import "../CssFiles/Home.css";
function Homesection(){

  function playnext(){
    const videolink = document.getElementsByTagName("video");
    console.log( `this is video link ${videolink}`);
  }
    return (
      <div className="main">
        <div className=" side-box">
          <Sidebar />
        </div>
        <div className="video-box"  playnext>
          <Myvideo />
        </div>
        <button  id="playnext-btn" onClick={playnext}>⬇</button>
        <button >⬆️</button>
      </div>
    );
}

export default Homesection;