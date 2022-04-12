import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Home></Home>
      </AuthProvider>
    </div>
  );
}

export default App;
