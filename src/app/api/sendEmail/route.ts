import { NextApiRequest } from 'next'
import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

// import sendEmail from "@/lib/mail";

export async function POST(request: NextApiRequest) {
  console.log(request.body)
  try {
    const { subject, message } = request.body;

    const transporter = nodemailer.createTransport(
      {
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: process.env.user,
          pass: process.env.pass
        },
        tls: { rejectUnauthorized: false }
      },
      {
        from: 'autoservice csa <m4chapurin@yandex.ru>'
      }
    )

    const mailOption = {
      from: 'm4chapurin@yandex.ru',
      to: 'machapurin@icloud.com',
      // to: 'm4chapurin@yandex.ru',
      subject: 'Send Email Tutorial',
      html: `
		<h3>Hello Augustine</h3>
		<li> title: ${subject}</li>
		<li> message: ${message}</li> 
		`
    }

    transporter.sendMail(mailOption)

    return NextResponse.json(
      { message: 'Email Sent Successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 }
    )
  }
}

// to: 'm4chapurin@yandex.ru',
// to: 'machapurin@icloud.com',
// subject: `Письмо с сайта csa от ${req.body?.name}`,
// subject: `Письмо с сайта  от csa}`,
// text: 'zloebuchee pismo',
// from: 'm4chapurin@yandex.ru'
//  `
// 	Имя: ${req.body?.name},
//     	Телефон: ${req.body?.phone},
//     	E-mail: ${req.body?.email},
//     	Сообщение: ${req.body?.message},
// 	`

// await sendEmail(message);
// console.log(message);
// res.send(`Спасибо за заявку, ${req.body?.name}!`);
// return NextResponse.json({ success: true })
// res.send(`Спасибо за заявку, ${req.body?.name}!`);
