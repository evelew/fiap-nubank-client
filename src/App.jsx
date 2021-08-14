import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { AppContextProvider } from "./context";

import Home from "./pages/Home";
import NewWalletInit from "./pages/NewWallet/Init";
import NewWalletSetName from "./pages/NewWallet/SetName";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/global.scss";
import "./theme/variables.css";

const App = () => (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/criar-nova-carteira">
            <NewWalletInit />
          </Route>
          <Route exact path="/criar-nova-carteira/name">
            <NewWalletSetName />
          </Route>
          {/* <Route exact path="/">
          <Redirect to="/home" />
        </Route> */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>

);

export default App;
