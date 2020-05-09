const { Wit, log } = require("node-wit");

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
module.exports.handler = async function (event, context) {
  const { q } = event.queryStringParameters;

  const client = new Wit({
    accessToken: "SZNLK3LTTSNWAGHUXFAUVT2OS2GDHEPD",
    logger: new log.Logger(log.DEBUG), // optional
  });

  const response = await client.message(q);

  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(response),
  };
};

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
