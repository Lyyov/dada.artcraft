import "./style/style.scss";

import React, { Suspense } from "react";
// import { SmoothProvider } from 'react-smooth-scrolling';

import Routes from "./routes/routes";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Layout from "./components/Layout/Layout";

import "./style/bootstrap.min.css";
import { About } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Header />

      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Layout>

      <Footer />
    </div>
  );
}

export default App;
