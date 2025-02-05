import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet-async";

console.log(Helmet);


const App: React.FC = () => {
  return (

    <>
      <Helmet>
        <meta property="og:title" content="Portfolio de Alfred Nico" />
        <meta property="og:description" content="Découvrez mes projets en développement web et mobile..." />
        <meta property="og:image" content="https://my-app-test.vercel.app/preview.png" />
        <meta property="og:url" content="https://my-app-test.vercel.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>

  );
}

export default App;
