import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Preloader from '../../components/preloader/Preloader';


const App = () => { 

  return (
    <div className="App" id='scrool'>
          {/* <Preloader/> */}
          <AllRoute/>
          <ToastContainer/>
    </div>
  );
}

export default App;