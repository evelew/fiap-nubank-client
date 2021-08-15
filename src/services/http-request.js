const httpRequest = ({ endpoint, method, data }) => {
  const url = new URL(`http://localhost:3000/${endpoint}`);

  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default httpRequest;
