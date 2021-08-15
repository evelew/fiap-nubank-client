import { useContext, useEffect, useState } from "react";
import {
  IonList,
  IonItem,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonIcon,
} from "@ionic/react";
import { calendarOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import CreateWalletContext from "./../../../context/create-wallet";
import httpRequest from "../../../services/http-request";

import Header from "../../Header";

import "./styles.scss";

const SelectIncome = () => {
  const { setSelectedCDI, selectedCDI } = useContext(CreateWalletContext);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    getIncomes();
  }, []);

  const getIncomes = () => {
    httpRequest({
      method: "GET",
      endpoint: "income/get-all",
    })
      .then((response) => response.json())
      .then((data) => {
        setIncomes(data);
      })
      .catch((err) => console.error(err));
  };

  const onRadioChange = (event) => {
    const selectedCDI = event.detail.value;
    setSelectedCDI(selectedCDI);
  };

  return (
    <div className="select-income">
      <Header />

      <p className="select-income__title title">
        Quando você quer ter esse dinheiro disponível?
      </p>

      <IonList lines="none">
        <IonRadioGroup onIonChange={onRadioChange} value={selectedCDI}>
          {incomes.map((income) => (
            <IonItem className="select-income__item" key={income._id}>
              <IonIcon icon={calendarOutline} slot="start" />

              <div className="name">
                <IonLabel>
                  <p>Disponíve em {income?.due_date}</p>
                  <small>{income?.name}</small>
                </IonLabel>
              </div>

              <IonRadio value={income?._id} slot="end" />
            </IonItem>
          ))}
        </IonRadioGroup>
      </IonList>

      <div className="g-bottom-button">
        <Link to="/criar-nova-carteira/valor">Confirmar</Link>
      </div>
    </div>
  );
};

export default SelectIncome;
