function getData(filePath) {
  return fetch(filePath, {
    method:'GET',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then((response) => {
    return response.json();
  });
}