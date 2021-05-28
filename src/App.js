import './App.css';
import CakeComp from './components/CakeComp';
import {Provider} from 'react-redux'
import store from "./redux/store"
import BurgerComp from './components/BurgerComp';
import CartComp from './components/CartComp';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeComp/>
      <BurgerComp/>
    </div>
    <div style={{display:"flex",justifyContent:"center",margin:"100px"}}>
    <CartComp/>
    </div>
    </Provider>
  );
}

export default App;
