import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Spaces from './spaces/Spaces';
import Footer from './components/Footer';
import Space5 from './spaces/space5/Space-5.jsx';
import Space4 from './spaces/space4/Space-4.jsx';
import Space3 from './spaces/space3/Space-3.jsx';
import Space2 from './spaces/space2/Space-2.jsx';
import Space1 from './spaces/space1/Space-1.jsx';
import './App.css';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('popstate', handlePopState); // Listen to the popstate event

    return () => {
      window.removeEventListener('popstate', handlePopState); // Clean up the event listener on component unmount
    };
  }, []);

  // Added the useEffect hook to listen for the popstate event, which is triggered when the URL changes without reloading the page. The handlePopState function will be called when this event occurs, allowing you to perform any additional logic you need.
  const handlePopState = () => {
    // Perform any additional logic when the URL changes without reloading the page
    console.log('URL changed without reloading');
  };

  return (
    <BrowserRouter>
      <div style={{ marginLeft: '0px' }}>
        <Helmet>
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C52MLZWVM"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7C52MLZWVM');
            `}
          </script>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Ultraspaces is where you can have fun and take cool breaks Ⓤ</title>
          <meta name="description" content="Ultraspaces website" />
          <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
          <link rel="icon" href="/src/img/favicon.ico" type="image/x-icon"></link>
        </Helmet>
        <Header />
        <main>
          <Routes>
            <Route path="/spaces" element={<Spaces />} />
            {/* <Route path="/spaces/space6" element={<Space6 />} /> */}
            <Route path="/spaces/space5" element={<Space5 />} />
            <Route path="/spaces/space4" element={<Space4 />} />
            <Route path="/spaces/space3" element={<Space3 />} />
            <Route path="/spaces/space2" element={<Space2 />} />
            <Route path="/spaces/space1" element={<Space1 />} />
          </Routes>
        </main>
        <hr className="divisory-line" />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
