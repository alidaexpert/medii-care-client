import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div>
<Router>
  <Header></Header>
  <Switch>
    <Route exact path="/">
      
    </Route>
  </Switch>
  <Footer></Footer>
</Router>
     
    </div>
  );
}

export default App;
