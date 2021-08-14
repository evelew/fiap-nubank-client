import { createContext, useState } from "react";

const defaultValues = {
  selectedCDI: '',
  newWalletName: '',
  setSelectedCDI: () => { },
  setNewWalletName: () => { },
};

const AppContext = createContext(defaultValues);

const AppContextProvider = ({ children }) => {
  const [selectedCDI, setSelectedCDI] = useState('');
  const [newWalletName, setNewWalletName] = useState('');

  return (
    <AppContext.Provider
      value={{
        selectedCDI,
        newWalletName,
        setSelectedCDI: (value) => {
          setSelectedCDI(value)
        },
        setNewWalletName: (value) => {
          setNewWalletName(value)
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
