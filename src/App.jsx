import { Route, Routes } from "react-router-dom";
import Report from './Pages/Report';
import Login from './Pages/Login';
import UserDetails from './Pages/UserDetails';
import ScaleDetails from './Pages/ScaleDetails';
import Scales from './Pages/Scales';
import OpenReportPage from './Pages/OpenReportPage';


const App = () =>{
  return (
    <Routes>
      <Route path="/voc/" element={<Login />} />
      <Route path="/voc/reports" element={<Report />} />
      <Route path="/voc/userdetails" element={<UserDetails />} />
      <Route path="/voc/scaledetails" element={<ScaleDetails />} />
      <Route path="/voc/scale" element={<Scales />} />
      <Route path="/voc/report" element={<OpenReportPage />} />
      
    </Routes>
  );
}

export default App


// https://ll08-mathematicalmodelling-dowell.github.io/voc/report?workspace_id=6385c0f18eca0fb652c94558&username=manish_test error_login&scale_id=66b326e41f6cf39544a2b438