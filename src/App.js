import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import {Routes ,Route} from 'react-router-dom'
import Dashboard from "./Pages/Dashboard";
import AddPays from "./Pages/AddPays";


function App() {
  return (
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/AddPays" element={<AddPays/>}/>
        </Routes>
      </div>
  );
}

export default App;
