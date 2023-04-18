import sgMail from '@sendgrid/mail';

export const envio = async (datos) => {
  const { nombre, correo, telefono, detalles, paquete } = datos;
  const info = {
    from: 'aragondinael@gmail.com',
    to: 'aragondinael@gmail.com',
    subject: `Nombre: ${nombre}`,
    text: `Correo: ${correo}`,
    html: `
    <p>Nombre: ${nombre}</p>
    <p>CORREO: ${correo}</p>
    <p>TELÉFONO: ${telefono}</p>
    <p>Paquete: ${paquete}</p>
    <p>Detalles: ${detalles}</p>
    `
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgMail
    .send(info)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};

