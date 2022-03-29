import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Habits } from "./pages/Habits";
import { Today } from "./pages/Today";
import { Historic } from "./pages/Historic";
import { Header } from "./components/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/habitos" element={<Habits/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/historico" element={<Historic/>}/>
        </Routes>
      </BrowserRouter>
    </main>  
      
  );
}

export default App;
