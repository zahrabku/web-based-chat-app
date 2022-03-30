import { Route, Routes } from "react-router-dom";

import { Login } from "./components/Login";
import { Chats } from "./components/Chats";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
