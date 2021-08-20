import { useContext, useState } from "react";
import {
  IonIcon,
  IonList,
  IonItem,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  useIonViewDidEnter,
  IonSpinner,
} from "@ionic/react";
import { walletOutline } from "ionicons/icons";
import { useHistory } from "react-router";

import UpdateWalletContext from "./../../../context/update-wallet";

import httpRequest from "../../../services/http-request";
import formatValue from "../../../helpers/formatValue";

import Header from "./../../Header";

import "./styles.scss";

const Wallet = () => {
  const history = useHistory();
  const { setWallet, amount, wallet, clearStore } =
    useContext(UpdateWalletContext);
  const [wallets, setWallets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        setWallets(data);
      })
      .catch((err) => console.error(err));
  };

  const onRadioChange = (event) => {
    const wallet = event.detail.value;
    setWallet(wallet);
  };

  const updateWallet = () => {
    setIsLoading(true);

    httpRequest({
      method: "PUT",
      endpoint: "wallet/update",
      data: {
        _id: wallet,
        value: formatValue(amount),
      },
    })
      .then(() => {
        clearStore();
        history.push("/");
      })
      .catch((err) => console.error({ err }))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="select-wallet">
      <Header />

      <div className="select-wallet__top">
        <p className="title">
          Em qual carteira você quer guardar esse dinheiro?
        </p>

        <IonList lines="none">
          <IonRadioGroup onIonChange={onRadioChange} value={wallet}>
            {wallets.map((wallet) => (
              <IonItem className="select-wallet__item" key={wallet._id}>
                <div className="name">
                  <IonLabel>
                    <p>{wallet?.name}</p>
                    <small>Disponíve em {wallet?.due_date}</small>
                  </IonLabel>
                </div>

                <IonRadio value={wallet?._id} slot="end" />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
      </div>

      <footer className="g-bottom-button">
        {isLoading ? (
          <IonSpinner name="crescent" />
        ) : (
          <button onClick={updateWallet}>
            <IonIcon icon={walletOutline} />
            <span>Confirmar</span>
          </button>
        )}
      </footer>
    </div>
  );
};

export default Wallet;
