import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  const navigation = useNavigation();
  return (
    <div>
      <div className="shadow-lg p-2 mb-5">
      <div className="flex justify-between items-center my-5 w-[80%] mx-auto ">
        <div>
          <img className="w-12" src="../public/vite.svg" alt="" />
        </div>
        <div>
          <Header></Header>
        </div>
      </div>

      </div>
      {
        navigation.state === 'loading'? <div className="flex justify-center items-center h-screen"> <span className="loading loading-spinner text-success "></span> </div> :
      <Outlet></Outlet>
      }
    </div>
  );
}

export default App;
