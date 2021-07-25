import nodemailer from 'nodemailer';
import { confirmEmail } from './confirm.js';
import { shoppingListMail } from './shoppingList.js';


export const mailer = (to,subject,html) => {

  let transport = nodemailer.createTransport({
    host: 'smtp.domena.pl',
    port: 465,
    auth: {
      user: process.env.username,
      pass: process.env.passwd
    }
  });

  const incomingData = {
    to: to,
    subject: subject,
    html: html
  }

  const directives = {
    from: 'm.jakobszy@ister.pl',
    to: incomingData.to,
    subject: incomingData.subject,
    html: incomingData.html
  }




  const message = (directives) => {
    const data = {
      from: directives.from,
      to: directives.to,
      subject: directives.subject,
      html: directives.html
    }
    return data
  };

  return transport.sendMail(message(directives), function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });

};