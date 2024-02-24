import '../CssFiles/video.css';
import videoLink from'../Photos/video1.mp4';
function Main() {
   return (
     <>
       <div>
         <div className="video-screen-div">
           <div className="video">
             <video width="330" height="500" controls>
               <source src={videoLink} type="video/mp4" />
             </video>
           </div>
           <div className="icons-div">
             <h1>👍</h1>
           </div>
         </div>
       </div>
     </>
   );
}

export default Main;
