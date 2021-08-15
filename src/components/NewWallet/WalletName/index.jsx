import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import AppContext from "./../../../context";
import httpRequest from "../../../services/http-request";

import Header from "./../Header";

import "./styles.scss";

const WalletName = () => {
  const history = useHistory();
  const { setNewWalletName, newWalletName, newWalletValue, selectedCDI } =
    useContext(AppContext);

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
    httpRequest({
      method: "POST",
      endpoint: "wallet/create-new",
      data: {
        name: newWalletName,
        cdi: parseInt(selectedCDI),
        value: newWalletValue,
      },
    })
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.error({ err }));
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
        <button onClick={createNewWallet}>
          <IonIcon icon={walletOutline} />
          <span>Confirmar</span>
        </button>
      </footer>
    </div>
  );
};

export default WalletName;
