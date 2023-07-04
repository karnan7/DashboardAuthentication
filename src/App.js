import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState("user");

  // useEffect(() => {
  //   const localUser = localStorage.getItem('user');
  //   if(localUser){
  //     setUser(JSON.parse(localUser));
  //   }
  // },[])

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])
  return (
    <div>
      <Router>
        <Toaster/>
        <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
