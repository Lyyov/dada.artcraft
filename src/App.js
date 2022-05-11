import "./style/style.scss";
import { Switch } from "react-router-dom";
import React, { Suspense } from "react";
// import { SmoothProvider } from 'react-smooth-scrolling';

import Routes from "./routes/routes";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Layout from "./components/Layout/Layout";

import "./style/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Layout>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </Switch>
      </Layout>

      <Footer />
    </div>
  );
}

export default App;
