import mailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
		user: process.env.user,
		pass: process.env.pass
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'autoservice csa <m4chapurin@yandex.ru>'
});

const sendEmail = (message: Options) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;