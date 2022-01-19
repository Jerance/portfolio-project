 const express = require ('express');
 const app = express();
 const nodemailer = require("nodemailer")

 const PORT = process.env.PORT || 5000;

 app.use(express.static('public'));
 app.use(express.json())

 app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/contact-form.html')
 })

 app.post('/', (req, res) => {
     console.log(req.body);

     const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
             user: 'michael.jerance@gmail.com',
             pass: 'fqqh yikk gmjc pwyg'
         }
     })

     const mailOptions = {
         form: req.body.email,
         to: 'michael.jerance@gmail.com',
         subject: `${req.body.email} ${req.body.subject}`,
         text: req.body.message,
     }

     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             console.log(error);
             res.send('error');
         } else {
             console.log('Votre message a été envoyé ^^' + info.response);
             res.send('success')
         }
     })
 })

 app.listen(PORT, () =>{
    console.log(`Serveur running on port${PORT}`)
 })