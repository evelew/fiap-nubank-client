const formatCurrency = (value) => {
  if (!value) return value;

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export default formatCurrency;
