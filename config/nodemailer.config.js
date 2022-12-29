const nodemailer = require("nodemailer");
const config = require("../config/nodemailer_auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: user,
    pass: pass,
  },
  tls: {
      rejectUnauthorized: false,
  }
});

module.exports.sendConfirmationEmail = (name, email, confirmacao) => {
    transport.sendMail({
      from: user,
      to: email,
      subject: "Por favor confirme sua conta",
      html: `<h1>Confirmação de Email</h1>
          <h2>Olá ${name}</h2>
          <p>Obrigado por criar uma conta. Por favor confirme seu Email clicando no link abaixo</p>
          <form action="https://uploadteses.onrender.com/usuarios/registro/${confirmacao}" method="POST">
          <input type='submit' style="margin-top:5px; border-color:#17a2b8; border: 1px solid transparent; background-color:#17a2b8; color:#fff; border-radius: 0.25rem; font-size: 1rem;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          padding: 0.375rem 0.75rem;"
          value='Confirme' />
          </form>
          </div>`,
    }).catch(err => console.log(err));
  };