const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true 465, false outras
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

transport.sendMail({
    from: 'Felipe1501 <felipebsantoslo1501@gmail.com>',
    to: 'aubifelipe@gmail.com',
    subject: 'Enviando email com nodemailer!!!',
    html: '<h1>Hello Hello!</h1><p> Email Enviado com Nodemailer fiiii!!!!</p>',
    text: 'Hello Hello! Email Enviado com Nodemailer fiiii!!',

}).then((response) => console.log("Email enviado com sucesso!!"))
.catch((err) => console.log("Erro ao envial email: ", err));


/**
 * hotmail:
 * host: smtp.office365.com
 * port: 587
 * secure: false
 */
