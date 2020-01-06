const getName = () => {
  return fetch('/api/v1/auth/verify')
    .then(res => {
      return res.json()
        .then(data => {          
          return data.name;
        });
    });
};

export default getName;
