const formatValue = (v) => {
  const removeDots = v.replaceAll(".", "");
  const fixCents = removeDots.replaceAll(",", ".");
  return fixCents;
};

export default formatValue;
