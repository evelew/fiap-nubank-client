import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import "./styles.scss";

const SelectIncome: React.FC = () => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log(inputRef.current);
      inputRef.current.focus();
    }, 100);
  });

  return (
    <div className="wallet-name">
      <div className="wallet-name__top">
        <p>Qual o nome do novo porquinho?</p>
        <input ref={(ref) => (inputRef.current = ref)} />
      </div>

      <footer className="g-bottom-button">
        <Link to="/">
          <IonIcon icon={walletOutline} />
          <span>Confirmar</span>
        </Link>
      </footer>
    </div>
  );
};

export default SelectIncome;
