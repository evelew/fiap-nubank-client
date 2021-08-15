import { useEffect, useState } from "react";
import { IonList, IonItem } from "@ionic/react";

import httpRequest from "../../../services/http-request";

import "./styles.scss";

const Accounts = () => {
  const [wallets, setWallets] = useState([]);
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
        setWallets(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="home__accounts">
      <IonList lines="full">
        {wallets.map((wallet) => (
          <IonItem className="home__accounts-item">
            <div className="name" slot="start">
              <strong>{wallet?.name}</strong>
              <p>Disponível em {wallet?.due_date}</p>
            </div>
            <p className="value" slot="end">
              {wallet?.value}
            </p>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default Accounts;
