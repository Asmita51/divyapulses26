import React, { useEffect, useState } from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Preloader from '../../components/preloader/Preloader';


const App = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    // show preloader if not yet shown this session
    return !sessionStorage.getItem('divya_preloader_shown');
  });

  useEffect(() => {
    document.body.style.overflow = showPreloader ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [showPreloader]);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  return (
    <div className="App" id='scrool'>
      {/* {showPreloader ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <>
          <AllRoute/>
          <ToastContainer/>
        </>
      )} */}

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