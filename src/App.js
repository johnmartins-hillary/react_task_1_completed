import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Result from "./pages/Result/Result";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin/*" element={<Admin />}></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
