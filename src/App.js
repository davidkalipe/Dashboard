import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import {Routes ,Route} from 'react-router-dom'
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
      </div>
  );
}

export default App;
