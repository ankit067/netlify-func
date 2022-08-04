// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const { exec } = require("child_process");
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    let data = ""
    exec('ls -la', (err, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      console.error(err)
      data = "stdout"+stdout+"Stderr"+stderr+"err"+err;
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
