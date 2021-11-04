const request = require('request');
const breedName = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    return console.log("error", error);
  }

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

  // const firstEntry = data[0].description
  // console.log(firstEntry);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`${breedName} not found!`);
  }
  
});
