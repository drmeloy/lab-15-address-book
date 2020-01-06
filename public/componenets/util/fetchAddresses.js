const fetchAddresses = () => {
  return fetch('/api/v1/entry')
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json;
    });
};

export default fetchAddresses;
