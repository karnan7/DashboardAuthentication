import { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
