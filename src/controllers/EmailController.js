const enviarEmail = require("../handlers/emails/email");

module.exports = {
  confirm: async (req, res, next) => {
    const { name, surname, email, orden, ordenPay, plan, monto } = req.body;
    try {
      let ok = await enviarEmail.confirmPay({
        from: "<ventas@tedesco.es>",
        subject: "Contratación Servidor",
        name: name,
        surname: surname,
        email: email,
        orden: orden,
        ordenPay: ordenPay,
        plan: plan,
        monto: monto,
      });
      if (ok) {
        res.json({
          message: "Email de confirmación enviado con éxito",
        });
      } else
        res.status(404).send({
          message: "Algo fallo con el envio de email",
        });
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  contact: async (req, res, next) => {
    console.log(req.body);
    const { name, email, subject, message } = req.body;
    try {
      let ok = await enviarEmail.contact({
        name: name,
        from: email,
        subject: subject,
        message: message,
      });
      if (ok) {
        res.json({
          message: "Email de confirmación enviado con éxito",
        });
      } else
        res.status(404).send({
          message: "Algo fallo con el envio de email",
        });
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
