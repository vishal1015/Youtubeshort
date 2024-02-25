import '../CssFiles/Header.css'
import userimg from '../Photos/photo2.jpg'
function Header() {
   return (
     <>
       <div className="navbar">
        <nav>
         <ul type="none">
         <li> <input type='text'></input></li>
         <li> <a href='go'> Home</a></li>
         <li> <img src={userimg} alt="user"></img></li>
         </ul>
        </nav>
       </div>
     </>
   );
}

export default Header;
