import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="p-3 bg-red-700 text-slate-200 text-xl">
        <u>
          <h1>Context API</h1>
        </u>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
