import MainWrapper from "./MainWrapper";
import NavHeader from "./NavHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Search from "./Search";
import PrintData from "./PrintData";


function index() {
  return (
    <>
    <Router>
      <ToastContainer />
      <Provider>
        <NavHeader />
      <Switch>
      <Route path='/search' element={<Search />} />
      <Route path='/print' element={<PrintData />} />
      <Route path='/' element={<MainWrapper />} />
      </Switch>
      </Provider>
      </Router>
     
    </>
  );
}

export default index;
