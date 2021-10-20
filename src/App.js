import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import AboutUs from './component/About/AboutUs';
import ContactUs from './component/Contact/ContactUs';
import DoctorDetails from './component/DoctorDetails/DoctorDetails';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home/Home';
import NotFound from './component/NotFound/NotFound';
import ServiceComponent from './component/ServiceComponet/ServiceComponent';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import SignUpComplete from './component/SignUpComplete/SignUpComplete';
import UpdateProfile from './component/UpdateProfile/UpdateProfile';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
<AuthProvider>
<Router>
  <Header></Header>
  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <PrivateRoute exact path="/services">
      <ServiceComponent></ServiceComponent>
    </PrivateRoute>
    <PrivateRoute path="/services/:serviceId">
      <ServiceDetails></ServiceDetails>
    </PrivateRoute>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/register">
      <Register></Register>
    </Route>
    <PrivateRoute path="/sign_in">
      <SignUpComplete></SignUpComplete>
    </PrivateRoute>
    <PrivateRoute path="/update_profile">
      <UpdateProfile></UpdateProfile>
    </PrivateRoute>
    <PrivateRoute path="/doctors">
      <DoctorDetails></DoctorDetails>
    </PrivateRoute>
    <Route path="/about">
      <AboutUs></AboutUs>
    </Route>
    <Route path="/contact">
      <ContactUs></ContactUs>
    </Route>
    <Route path="*">
      <NotFound></NotFound>
    </Route>
  </Switch>
  <Footer></Footer>
</Router>
</AuthProvider>
     
    </div>
  );
}

export default App;
