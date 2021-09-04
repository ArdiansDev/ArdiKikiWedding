import "./App.css";

import React, {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CetakQR from "./pages/CetakQR";
import LayarSapa from "./pages/LayarSapa";
import DaftarTamu from "./pages/DaftarTamu";
import Share from "./pages/Share";
import Scan from "./pages/Scan";
import { AuthProvider } from "./components/AuthContext";
import Konfirmasi from "./pages/Konfirmasi";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Undangan from "./pages/Undangan/Template1/UndanganVip";
import Undangan1 from "./pages/Undangan/Template1/UndanganVip1";

import UndanganUmum from "./pages/Undangan/Template1/UndanganUmum";

import Notfound from "./pages/404";
import Build from "./pages/Build";
import Signup from "./pages/SignUp";
import ImageUpload from "./components/imgcrop/ImageUpload";
import UndanganBuild from "./pages/Undangan/Template1/Build";
import Countdown from "./components/Countdown";

function App() {
  // const DefaultContainer = () => <div></div>;

  return (
    <div>
      <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/home" exact component={LayarSapa} />
              <PrivateRoute path="/Scan" exact component={Scan} />
              <PrivateRoute path="/konfirmasi" exact component={Konfirmasi} />
              <PrivateRoute path="/CetakQR" exact component={CetakQR} />
              <PrivateRoute path="/DaftarTamu" exact component={DaftarTamu} />
              <PrivateRoute path="/Share" exact component={Share} />
              <PrivateRoute path="/Build" exact component={Build} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/404/" component={UndanganUmum} />
              <Route path="/" exact component={UndanganUmum} />
              <Route path="/:id" exact component={Undangan} />
              <Route path="/vip/:id" exact component={Undangan1} />

              <Route path="/imgcrop" exact component={Countdown} />

              {/* <Route path="/Undangan/:uid" exact component={Undangan} /> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
