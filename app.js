const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('handlebars');
const fs = require('fs');

const app = express();

// // view engine setup
app.set("view options", {
    layout: false
});


app.get('/', (req, res) => res.send('Up'));

app.get('/mail', function (req, res) {
    let options = {
        user_email: 'info@eluzini.com',
        password: 'Lagoscity10@',
        to: 'arunahisraelg2010@gmail.com',
        subject: 'Visitor Request',
        // html: require('./templates/visitor_email')({}, {})
        html: require('./templates/visitor_email_')({}, {})
    };

    MailService.sendMail(options, function (res) {
        console.log('Response from mail service ', res)
    });
});

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST,PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const port = process.env.PORT || 3200;
app.listen(port);
console.log('App listening on port:', port);

module.exports = app;


const MailService = {
    sendMail: function (options, callback) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: options.user_email, // Your email id
                pass: options.password // Your password }
            }
        });

        fs.readFile(path.join(__dirname + '/templates/v.hbs'), function (err, data) {
            if (!err) {
                // make the buffer into a string
                const source = data.toString();
                // call the render function

                const template = hbs.compile(source);
                const replacements = {
                    user: {full_name: 'Jesus Christ'},
                    visitor: {}
                };
                const htmlToSend = template(replacements);

                let mailOptions = {
                    from: options.user_email, // sender address
                    to: [options.to], // list of receivers
                    subject: options.subject, // Subject line
                    // text: options.text, //, // plaintext body
                    html: htmlToSend,
                    // attachments: options.attachments
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        callback(error, null);
                    } else {
                        console.log('Message sent: ' + info.response);
                        callback(null, info);
                    }
                });
            } else {
                // handle file read error
                console.log('Err', err);
            }
        });
        // const template = hbs.compile(htmlFile);
        // const replacements = {
        //     user: {full_name: 'Jesus Christ'},
        //     visitor: {}
        // };
        // const htmlToSend = template(replacements);
        //
        // let mailOptions = {
        //     from: options.user_email, // sender address
        //     to: [options.to], // list of receivers
        //     subject: options.subject, // Subject line
        //     // text: options.text, //, // plaintext body
        //     html: htmlToSend,
        //     // attachments: options.attachments
        // };
        //
        // transporter.sendMail(mailOptions, function (error, info) {
        //     if (error) {
        //         console.log(error);
        //         callback(error, null);
        //     } else {
        //         console.log('Message sent: ' + info.response);
        //         callback(null, info);
        //     }
        // });
    }
};

// function readFile(path) {
//     // read the file and use the callback to render
//     fs.readFile(path, function (err, data) {
//         console.log('Here');
//         if (!err) {
//             // make the buffer into a string
//             const source = data.toString();
//             // call the render function
//             return source;
//         } else {
//             // handle file read error
//             console.log('Err', err);
//         }
//     });
// }