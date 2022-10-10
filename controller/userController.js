const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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")
const userModel = require('../model/userModel')

exports.contactUs = async (req, res) => {
    const {
        name,
        email,
        subject,
        message
    } = req.body

    if (name == '' || name == undefined || name == null) {
        return res.json({ statusCode: 400, statusMsg: "name required" })
    }

    if (email == '' || email == undefined || email == null) {
        return res.json({ statusCode: 400, statusMsg: "email required" })
    }

    if (subject == '' || subject == undefined || subject == null) {
        return res.json({ statusCode: 400, statusMsg: "subject required" })
    }

    if (message == '' || message == undefined || message == null) {
        return res.json({ statusCode: 400, statusMsg: "message required" })

    }


    const msg = {
        to: 'bhartilokhande79@gmail.com',
        from: 'bharti.infograins@gmail.com',
        subject: `Inquiry from ${name}`,
        html: ` name:${name}<br/>
                email:${email}<br/>
                subject:${subject}<br/>
                message:${message}
              `,
    }
    sgMail.send(msg, async function (err, data) {
        if (err) {
            return res.json({ statusCode: 400, statusMsg: err })
        }
        if (data) {

            return res.json({ statusCode: 200, statusMsg: "mail sent" })
        }
    })
}

exports.subscribe = async(req,res) => {
    const email = req.body.email

    if (email == '' || email == undefined || email == null) {
        return res.json({ statusCode: 400, statusMsg: "email required" })
    }

    const user = await userModel.findOne({ email: email })
    if (user) {
        return res.json({ statusCode: 200, statusMsg: "User already subscribe" })
    }
    if (!user) {
        let response = new userModel({
            email: email,
        })
        response.save((error, data) => {
            if (error) {
                return res.json({ statusCode: 400, statusMsg: error })
            }
            if (data) {
                return res.json({ statusCode: 200, statusMsg: "User subscribe" })
            }
        })
    }


}


exports.test = async(req,res) => {
    res.json({statusCode:200,statusMsg:"deploy successfully"})
}


 // const msg = {
    //     to: 'bhartilokhande79@gmail.com',
    //     from: {
    //         email:'bharti.infograins@gmail.com',
    //         name: "bharti",
    //     },
    //     templateId: "d-bfb07c8ef6c04540bfa7c5bb1f70630f",
    // };




// module.exports.Mail = async (apnOption) => {
//     const msg = {
//       to: apnOption.email,
//       from: {
//         email: secret.MAIL_FROM_EMAIL,
//         name: "ROLA",
//       },
//       templateId: apnOption.templetId,
//       dynamic_template_data: {
//         NAME: apnOption.name,
//         LINK: apnOption.link,
//         LOGO_IMAGE_PATH: secret.LOGO_IMAGE_PATH,
//         MESSAGE: apnOption.message,
//         MAILFROM: apnOption.email,
//       },
//     };
  
//     if (secret.MAIL_STATUS == 1) {
//       let Mail = await sgMail.send(msg, (error, result) => {
//         if (error) {
//           console.log("SendGrid error on mail", error);
//         } else {
//           console.log("SendGrid Mail Send Successfully....");
//         }
//       });
//     }
//   };