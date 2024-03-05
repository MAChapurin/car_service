"use client"
import { FormEvent, useState } from 'react';

export default function Home() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')
  // 
  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message
      })
    })
    console.log(await response.json())
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={sendMail} className="h-full w-1/3 space-y-6">
        <div className="flex flex-col items-start w-full justify-start">
          <h1 className="text-xl font-semibold">Tutorial Email</h1>
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            Subject
          </label>
          <input
            style={{ color: 'black' }}
            name="title"
            type="text"
            id="title"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            placeholder="What will you title this goal?"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            What would you need help with?
          </label>
          <textarea
            style={{ color: 'black' }}
            name="description"
            id="description"
            required
            cols={10}
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            placeholder="What will you title this goal?"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <button type='submit' className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
          <span>Send Message</span>
        </button>
      </form>
    </main>
  )
}

// 'use client'

// import { useState } from 'react';
// import axios from 'axios';

// function HomePage() {

//   async function sendForm() {
//     // 'use server'
//     try {

//       await axios.post('http://localhost:3000/api/send-request', {
//         name, phone, email, message
//       });

//       setName('');
//       setPhone('');
//       setEmail('');
//       setMessage('');

//     } catch (error) {
//       console.log('Sending error', error);
//     }

//   }

//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '500px'}}>
//     <p>Имя</p>
//     <p>{name}</p>
//     <input type='text' value={name} onChange={event => setName(event.target.value)} />
//     <p>Телефон</p>
//     <p>{phone}</p>
//     <input type='text' value={phone} onChange={event => setPhone(event.target.value)} />
//     <p>E-mail</p>
//     <p>{email}</p>
//     <input type='text' value={email} onChange={event => setEmail(event.target.value)} />
//     <p>Сообщение</p>
//     <p>{message}</p>
//     <input type='text' value={message} onChange={event => setMessage(event.target.value)} />
//     <button type='button' onClick={(e)=> {
//       e.preventDefault()
//       sendForm()
//     }}>Отправить</button>
//   </div>
// }

// export default HomePage