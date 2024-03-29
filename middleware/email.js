const { AVAILABLE_TEMPLATES, Email } = require("../utils/Email");

const sendEmail = async(req, res,next) => {
    try {
      const { emails,filePath } = req.body
      console.log( "its private",emails ,filePath)
      const emailClient = new Email();
      emailClient.setTemplate(AVAILABLE_TEMPLATES.REQUEST);
      emailClient.setBody();
      emailClient.send(emails);
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "email error",
        error: error
      });
    }
  }
module.exports =sendEmail;  