const httpRequest = ({ port = 3005, endpoint, method, data }) => {
  const url = new URL(`http://localhost:${port}/${endpoint}`);

  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default httpRequest;
