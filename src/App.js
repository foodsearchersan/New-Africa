import * as React from 'react';
// import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'

 
import whatsapp from './components/Assests/whatsapp.png'
import './app.css'
import Spinner from './components/pages/Spinner';

 
const Temp = React.lazy(() => import("./components/pages/Temp"));
const Footer = React.lazy(() => import("./components/pages/Footer"));

const TopNav = React.lazy(() => import("./components/pages/TopNav"));


function App() {

  const [spinner, setSpinner] = React.useState(true);
  React.useEffect(() => {
   setTimeout(()=>{
    setSpinner(false)
   }, 2500)
  },[])

  return (
    <div>

      <TopNav />

      {
        spinner ?
          (
            <Spinner />
          )
          :
          (

            <div>
              <Routes>
       
              
                <Route path="/" element={<React.Suspense fallback={<Spinner />}><Temp />  </React.Suspense>} />
                <Route path="/Spinner" element={<Spinner />} />
              </Routes>

              <Footer />



              <a href='https://wa.me/918939111172?text=Hai' className='whatsapp_icon'><img src={whatsapp} /></a>
              {/* <Help /> */}

            </div>
          )
      }

    </div>
  );
}

export default App;
