import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <div>
          <img className="w-12" src="../public/vite.svg" alt="" />
        </div>
        <div>
          <Header></Header>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
