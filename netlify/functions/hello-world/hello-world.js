// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const { exec } = require("child_process");
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    let data = ""
    exec('ls -la /etc', (err, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      console.error(err)
      data = "stdout"+stdout+"Stderr"+stderr+"err"+err;
      exec(
      return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello ${subject}`, data: data }),
      }
    })
    
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
