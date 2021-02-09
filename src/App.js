import './App.css';
import {useContext} from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import {GlobalContext} from "./stateproviders/globalState"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const {state} = useContext(GlobalContext)
  return (
   <>
    <Switch>
    <Route path='/login'>
     <Login/>   
 </Route>
    <Route exact path="/">
  {state.LoginStatus === true ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> }
</Route>
<Route path="/dashboard" component={Home} />
</Switch>
   </>
  );
}

export default App;
