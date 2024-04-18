import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { env } from 'node:process';

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, message } = body
    const transporter = nodemailer.createTransport(
      {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
          user: env.NEXT_PUBLIC_USER,
          pass: env.NEXT_PUBLIC_PASSWORD
        },
        tls: { rejectUnauthorized: false }
      },
      {
        from: 'autoservice csa <CSA-test@mail.ru>'
      }
    )

    const mailOption = {
      from: 'CSA-test@mail.ru',
      to: ['machapurin@icloud.com'],
      subject: 'Заявка с сайта автосервиса CSA',
      html: `
      <div style="height: 500px;background-color: #fff;">
      <h4 style="margin-bottom: 10px;">Имя клиента:<i> ${name}<i></h4>
      <i>Телефон: <a href="tel:${phone}">${phone}</a></i>
      ${message ? `<h4 style="margin-bottom: 10px;"><i>Комментарий к заявке:</i></h4>
      <br/>
      <p>${message}</р>` : ''}
      </div>
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

