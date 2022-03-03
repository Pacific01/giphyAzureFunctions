module.exports = async function (context, req) {
  try {
    const response =  await axios.get('http://api.giphy.com/v1/gifs/search?api_key=x4xjAYV288NfnVoOtZCgQbMgjJVxJxGu&q=azure')
    context.log(`statusCode: ${response.statusCode}`);
    context.log(response);
    return response; // or return a custom object using properties from response
  } catch (error) {
    // If the promise rejects, an error will be thrown and caught here
    context.error(error);
  }
}
