import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { CreateWalletProvider } from "./context/create-wallet";
import { UpdateWalletContextProvider } from "./context/update-wallet";

import Home from "./pages/Home";
import NewWalletInit from "./pages/NewWallet/Init";
import NewWalletSetName from "./pages/NewWallet/SetName";
import NewWalletSetValue from "./pages/NewWallet/SetValue";
import UpdateWalletAmount from "./pages/UpdateWallet/Amount";
import UpdateWalletWallet from "./pages/UpdateWallet/Wallet";

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
  <CreateWalletProvider>
    <UpdateWalletContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/criar-nova-carteira">
              <NewWalletInit />
            </Route>
            <Route exact path="/criar-nova-carteira/valor">
              <NewWalletSetValue />
            </Route>
            <Route exact path="/criar-nova-carteira/name">
              <NewWalletSetName />
            </Route>
            <Route exact path="/guardar-dinheiro/valor">
              <UpdateWalletAmount />
            </Route>
            <Route exact path="/guardar-dinheiro/carteira">
              <UpdateWalletWallet />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </UpdateWalletContextProvider>
  </CreateWalletProvider>
);

export default App;
