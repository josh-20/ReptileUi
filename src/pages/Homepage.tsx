import { useNavigate } from "react-router-dom"
import './HomePage.css';
export const HomePage = () => {
    const navigate = useNavigate();
    return(
        <div className="home-div">
            <h1>Reptile Tracker</h1>
            <div className="Nav-div">
                <nav className="home-nav">
                    <button onClick={() => {navigate("/signin",{replace: true})}}>SignIn</button>
                    <button onClick={() => {navigate("/createUser",{replace: true})}}>Create User</button>
                </nav>
            </div>
            <hr/>
                <p>Reptile Tracker is a reptile managment system that provides orginized and simple scheduling formats to help users provide periodic reptile care.</p>
        </div>
    )
}