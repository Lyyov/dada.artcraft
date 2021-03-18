import "./style/style.scss";
import { Switch } from 'react-router-dom';
import { SmoothProvider } from 'react-smooth-scrolling';

import Routes from './routes/routes';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Header />

      <Layout>
        <Switch>
          <Routes />
        </Switch>
      </Layout>

      <Footer />
    </div>
  );
}
  
export default App;
