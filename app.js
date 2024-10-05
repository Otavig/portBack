const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
//const PORT = 3000;

// Middleware para interpretar o body das requisições como JSON
app.use(express.json());

// Configurar o transporte para enviar o email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'suporte@ourworks.site', // Seu email
        pass: 'OBJ.2022'   // Sua senha do email
    }
});

// Rota 1 - Enviar email para Pessoa 1
app.post('/send-email-otavig', (req, res) => {
    const { senderName, senderEmail, title, description } = req.body;

    const mailOptions = {
        from: senderEmail,  // E-mail da pessoa que está enviando
        to: 'otaviogarcia.santos4@email.com', // Email da pessoa 1 que vai receber
        subject: title,  // Título da conversa
        text: `Nome: ${senderName}\nDescrição: ${description}` // Corpo do email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar email: ' + error);
        }
        res.status(200).send('Email enviado com sucesso para Pessoa 1: ' + info.response);
    });
});

// Rota 2 - Enviar email para Pessoa 2
app.post('/send-email-breno', (req, res) => {
    const { senderName, senderEmail, title, description } = req.body;

    const mailOptions = {
        from: senderEmail,
        to: 'pessoa2@email.com', // Email da pessoa 2 que vai receber
        subject: title,
        text: `Nome: ${senderName}\nDescrição: ${description}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar email: ' + error);
        }
        res.status(200).send('Email enviado com sucesso para Pessoa 2: ' + info.response);
    });
});

// Rota 3 - Enviar email para Pessoa 3
app.post('/send-email-jorge', (req, res) => {
    const { senderName, senderEmail, title, description } = req.body;

    const mailOptions = {
        from: senderEmail,
        to: 'pessoa3@email.com', // Email da pessoa 3 que vai receber
        subject: title,
        text: `Nome: ${senderName}\nDescrição: ${description}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar email: ' + error);
        }
        res.status(200).send('Email enviado com sucesso para Pessoa 3: ' + info.response);
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
