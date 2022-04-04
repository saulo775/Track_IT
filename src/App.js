import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserContext } from "./contexts/UserContext";


import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Habits } from "./pages/Habits";
import { Today } from "./pages/Today";
import { Historic } from "./pages/Historic";


function App() {
  const [token, setToken] = React.useState();
  const [disable, setDisable] = React.useState(false);
  const [userAvatarURL, setUserAvatarURL] = React.useState('');

  return (
    <main>
      <BrowserRouter>
        <UserContext.Provider
          value={{ 
            token, 
            setToken, 
            disable, 
            setDisable, 
            userAvatarURL, 
            setUserAvatarURL,
          }}
        >
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
