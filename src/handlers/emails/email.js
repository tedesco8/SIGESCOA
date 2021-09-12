const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const util = require('util');
const emailConfig = require('../../config/email');

let transport = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    auth: {
      user: emailConfig.user,
      pass: emailConfig.pass
    }
});

const generarHtml = () => {
  const html = pug.renderFile(`${__dirname}/./confirmPay.pug`);
  return juice(html);
}

exports.confirmPay = async (opc) => {
  let mailOptions = {
    from: `"Tedesco Dev" ${opc.from}`, // sender address
    to: `${opc.email}, ventas@tedesco.es, development@tedesco.es, direccion@tedesco.es, tedesco8@gmail.com`, // list of receivers
    subject: opc.subject, // Subject line
    html: `<h2>${opc.subject}</h2>
    <p> Se ha efectuado la contratacion de nuestro plan de hosting <b>${opc.plan}</b> correctamente. 
    Cliente: <b>${opc.name} ${opc.surname}</b>. Email: <b>${opc.email}</b>. Monto: <b>${opc.monto}</b> Número de órden: <b>${opc.orden}</b>. 
    Numero de orden PayPal: <b>${opc.ordenPay}</b></p>

    <p>A la brevedad recibirás un correo con las credenciales de acceso al servidor y la factura del servicio.</p>`
  };

  const enviarEmail = util.promisify(transport.sendMail, transport);
  return enviarEmail.call(transport, mailOptions); 
}

exports.contact = async (opc) => {
  console.log(opc)
  let mailOptions = {
    from: opc.from, // sender address
    to: `contacto@tedesco.es, tedesco8@gmail.com`, // list of receivers
    subject: opc.subject, // Subject line
    html: `<h2>${opc.subject}</h2>
      <p>${opc.name} quiere contactarse con TedescoDev </p>
      <p>Email: ${opc.from}</p>
      <p>Mensaje: ${opc.message}</p>`
  };

  const enviarEmail = util.promisify(transport.sendMail, transport);
  return enviarEmail.call(transport, mailOptions); 
}