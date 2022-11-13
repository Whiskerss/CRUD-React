import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDash from "./EmployeeDash";
import EmployeeRegis from "./EmployeeRegis";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
  return (
    <div className='App'>
      <div className='date container fixed-top mt-4'><h5>Date: {date}</h5></div>

      <ToastContainer
        position='top-left'
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        draggable={true}
        theme='dark'
      />

      <Router>
        <Routes>
          <Route path='/' element={<EmployeeDash />} />
          <Route path='/EmployeeRegis' element={<EmployeeRegis />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;