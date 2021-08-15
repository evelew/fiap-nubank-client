import { useState, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";

import httpRequest from "./../services/http-request";

import Top from "../components/Home/Top";
import Accounts from "../components/Home/Accounts";
import Footer from "../components/Home/Footer";

const Home = () => {
  const [wallets, setWallets] = useState([]);
  const [walletsTotalValue, setWalletsTotalValue] = useState(0);

  useEffect(() => {
    getWallets();
  }, []);

  const getWallets = () => {
    httpRequest({
      method: "GET",
      endpoint: "wallet/get-all",
    })
      .then((response) => response.json())
      .then((data) => {
        const values = data.map((wallet) => wallet?.value);
        const totalValue = values.reduce(
          (acc, currentValue) => (acc += currentValue)
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
