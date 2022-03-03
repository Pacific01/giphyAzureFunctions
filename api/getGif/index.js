const axios = require('axios')
module.exports = async function (context, req) {
  const name = (req.query.name || (req.body && req.body.name));

  try {
    const response =  await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=x4xjAYV288NfnVoOtZCgQbMgjJVxJxGu&q=${name}`)
    context.log(`statusCode: ${response.statusCode}`);
    context.log(response);
    return response; // or return a custom object using properties from response
  } catch (error) {
    // If the promise rejects, an error will be thrown and caught here
    context.error(error);
  }
}
