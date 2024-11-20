import {useState} from "react";
import Login from "./LoginForm/Login";
import UserDashBoard from "./UserDashboard/UserDashBoard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {

    const [isLogIn , setIsLoggedIn ] = useState(false);
    const [isAdmin , setIsAdmin] = useState(false);
    const [showError , setshowError] = useState(false);


   const handleLogin = (userName,passWord) =>{
    setshowError(false);

    if (userName === "user" && passWord === "user" ){
        setIsLoggedIn(true);
    }
    else if (userName === "nebiy" && passWord === "1234" ){
           setIsAdmin(true);
           setIsLoggedIn(true);
    }else {
        setshowError(true);
    }
  }

  return(
    <>
    
    {!isLogIn && <Login handleLogin={handleLogin} />}
    {isLogIn && !isAdmin && <UserDashBoard/>}
    {isLogIn && isAdmin && <AdminDashboard />}
    {showError && <ErrorMessage />}

    </>
 )
}

export default App
