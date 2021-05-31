import "./App.css";
import CakeComp from "./components/CakeComp";
import { Provider } from "react-redux";
import store from "./redux/store";
import BurgerComp from "./components/BurgerComp";
import NavBar from "./components/NavBar";
import AllItems from "./components/AllItems";
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      {/* <AllItems/> */}
    </Provider>
  );
}

export default App;
