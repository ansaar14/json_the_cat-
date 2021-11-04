const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(`error: ${error}`, null);
    
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);

    // const firstEntry = data[0].description
    // console.log(firstEntry);
    if (data[0]) {
      callback(null, data[0].description);
    
    } else {
      callback(`${breedName} not found!`, null);
    
    }
  
  });
};

module.exports = { fetchBreedDescription };
