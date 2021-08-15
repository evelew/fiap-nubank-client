import { createContext, useState } from "react";

const defaultValues = {
  selectedCDI: "",
  newWalletName: "",
  newWalletValue: "",
  setSelectedCDI: () => {},
  setNewWalletName: () => {},
  setNewWalletValue: () => {},
};

const CreateWallet = createContext(defaultValues);

const CreateWalletProvider = ({ children }) => {
  const [selectedCDI, setSelectedCDI] = useState("");
  const [newWalletName, setNewWalletName] = useState("");
  const [newWalletValue, setNewWalletValue] = useState("");

  return (
    <CreateWallet.Provider
      value={{
        selectedCDI,
        newWalletName,
        newWalletValue,
        setSelectedCDI: (value) => {
          setSelectedCDI(value);
        },
        setNewWalletName: (value) => {
          setNewWalletName(value);
        },
        setNewWalletValue: (value) => {
          setNewWalletValue(value);
        },
        clearStore: () => {
          setSelectedCDI("");
          setNewWalletName("");
          setNewWalletValue("");
        },
      }}
    >
      {children}
    </CreateWallet.Provider>
  );
};

export { CreateWalletProvider };
export default CreateWallet;
