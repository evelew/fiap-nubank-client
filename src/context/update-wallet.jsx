import { createContext, useState } from "react";

const defaultValues = {
  amount: "",
  wallet: "",
  setAmount: () => {},
  setWallet: () => {},
};

const UpdateWalletContext = createContext(defaultValues);

const UpdateWalletContextProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <UpdateWalletContext.Provider
      value={{
        amount,
        wallet,
        setAmount: (value) => {
          setAmount(value);
        },
        setWallet: (value) => {
          setWallet(value);
        },
        clearStore: () => {
          setAmount("");
          setWallet("");
        },
      }}
    >
      {children}
    </UpdateWalletContext.Provider>
  );
};

export { UpdateWalletContextProvider };
export default UpdateWalletContext;
