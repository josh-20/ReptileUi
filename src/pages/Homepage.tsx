import { useNavigate } from "react-router-dom"
import './style/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css'
export const HomePage = () => {
    const navigate = useNavigate();
    return(
        <div className="container">
            <div className="row">
                <div className="home-div">
                    <h1 className="title" >Sign In or Sign Up</h1>
                    <div className="Nav-div">
                        <nav className="home-nav">
                            <button className="button" onClick={() => {navigate("/signin",{replace: true})}}>Sign In</button>
                            <button className="button" onClick={() => {navigate("/createUser",{replace: true})}}>Sign Up</button>
                        </nav>
                    </div>
                    <p className="content">Reptile Tracker is a reptile management system that provides organized and simple scheduling formats to help users provide periodic reptile care.</p>
                </div>
            </div>
        </div>
    )
}