import { useState } from "react";
import { IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";

import httpRequest from "./../services/http-request";

import Top from "../components/Home/Top";
import Accounts from "../components/Home/Accounts";
import Footer from "../components/Home/Footer";

const Home = () => {
  const [wallets, setWallets] = useState([]);
  const [walletsTotalValue, setWalletsTotalValue] = useState(0);

  useIonViewDidEnter(() => {
    getWallets();
  });

  const getWallets = () => {
    httpRequest({
      method: "GET",
      endpoint: "wallet/get-all",
    })
      .then((response) => response.json())
      .then((data) => {
        const values = data.map((wallet) => wallet?.value);
        const totalValue = values.reduce(
          (acc, currentValue) => (acc += currentValue),
          0
        );

        setWallets(data);
        setWalletsTotalValue(totalValue);
      })
      .catch((err) => console.error(err));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <Top totalValue={walletsTotalValue} />
        <Accounts wallets={wallets} />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
