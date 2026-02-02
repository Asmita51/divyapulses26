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










// import React, { useState } from 'react';
// import AllRoute from '../router';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Preloader from '../../components/preloader/Preloader';

// const App = () => {
//   const [showWebsite, setShowWebsite] = useState(
//     !!sessionStorage.getItem('divya_preloader_shown')
//   );

//   return (
//     <div className="App" id="scrool">
//       {!showWebsite && (
//         <Preloader onFinish={() => setShowWebsite(true)} />
//       )}

//       {showWebsite && <AllRoute />}

//       <ToastContainer />
//     </div>
//   );
// };

// export default App;