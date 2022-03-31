import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Habits } from "./pages/Habits";
import { Today } from "./pages/Today";
import { Historic } from "./pages/Historic";

function App() {
  const [token, setToken] = React.useState();
  const [userAvatarURL, setUserAvatarURL] = React.useState('');

  return (
    <main>
      <BrowserRouter>
        <UserContext.Provider
          value={{ token, setToken, userAvatarURL, setUserAvatarURL }}
        >
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </main>

  );
}

export default App;
