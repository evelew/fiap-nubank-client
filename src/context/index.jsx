import { createContext, useState } from "react";

const defaultValues = {
  selectedCDI: '',
  newWalletName: '',
  newWalletValue: '',
  setSelectedCDI: () => { },
  setNewWalletName: () => { },
  setNewWalletValue: () => { },
};

const AppContext = createContext(defaultValues);

const AppContextProvider = ({ children }) => {
  const [selectedCDI, setSelectedCDI] = useState('');
  const [newWalletName, setNewWalletName] = useState('');
  const [newWalletValue, setNewWalletValue] = useState(0);

  return (
    <AppContext.Provider
      value={{
        selectedCDI,
        newWalletName,
        newWalletValue,
        setSelectedCDI: (value) => {
          setSelectedCDI(value)
        },
        setNewWalletName: (value) => {
          setNewWalletName(value)
        },
        setNewWalletValue: (value) => {
          setNewWalletValue(value)
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
