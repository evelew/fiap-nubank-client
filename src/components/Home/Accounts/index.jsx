import { IonList, IonItem } from "@ionic/react";

import formatCurrency from "./../../../helpers/formatCurrency";

import "./styles.scss";

const Accounts = ({ wallets }) => {
  return (
    <div className="home__accounts">
      <IonList lines="full">
        {wallets.map((wallet) => (
          <IonItem className="home__accounts-item" key={wallet?._id}>
            <div className="name" slot="start">
              <strong>{wallet?.name}</strong>
              <p>Disponível em {wallet?.due_date}</p>
            </div>
            <p className="value" slot="end">
              {formatCurrency(wallet?.value)}
            </p>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default Accounts;
