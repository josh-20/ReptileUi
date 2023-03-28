import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate = useNavigate();
      // HandleLogout
  async function handleLogout () {
    await fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
      method: "post"
    });
    navigate("/signin", {replace: true})
  }
    return(
    <div id="header-ctn">
        <h1 id="header">Reptile Daddy</h1>
        <div id="logout" onClick={handleLogout}>Logout</div>
    </div>
    )
}