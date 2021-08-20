import { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router";
import { IonIcon, IonSpinner } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import CreateWalletContext from "./../../../context/create-wallet";
import httpRequest from "../../../services/http-request";
import formatValue from "../../../helpers/formatValue";

import Header from "../../Header";

import "./styles.scss";

const WalletName = () => {
  const history = useHistory();
  const {
    setNewWalletName,
    newWalletName,
    newWalletValue,
    selectedCDI,
    clearStore,
  } = useContext(CreateWalletContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input")?.focus();
    }, 0);
  }, []);

  const onChange = () => {
    const name = document.querySelector(".wallet-name__input")?.value;
    setNewWalletName(name);
  };

  const createNewWallet = () => {
    setIsLoading(true);

    httpRequest({
      method: "POST",
      endpoint: "wallet/create-new",
      data: {
        name: newWalletName,
        cdi: selectedCDI,
        value: formatValue(newWalletValue),
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
    <div className="wallet-name">
      <Header />

      <div className="wallet-name__top">
        <p className="title">Qual o nome do novo porquinho?</p>
        <input
          className="wallet-name__input"
          value={newWalletName}
          onChange={onChange}
        />
      </div>

      <footer className="g-bottom-button">
        {isLoading ? (
          <IonSpinner name="crescent" />
        ) : (
          <button onClick={createNewWallet}>
            <IonIcon icon={walletOutline} />
            <span>Confirmar</span>
          </button>
        )}
      </footer>
    </div>
  );
};

export default WalletName;
