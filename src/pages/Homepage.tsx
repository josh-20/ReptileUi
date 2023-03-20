import { useNavigate } from "react-router-dom"
import './HomePage.css';
export const HomePage = () => {
    const navigate = useNavigate();
    return(
        <div className="home-div">
            <nav className="home-nav">
                <button onClick={() => {navigate("/signin",{replace: true})}}>SignIn</button>
                <button onClick={() => {navigate("/createUser",{replace: true})}}>Create User</button>
            </nav>
            <div>
                Some Info about the website
            </div>
        </div>
    )
}