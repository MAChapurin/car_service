'use client'
import Link from "next/link"
 
export default function _404() {

 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Страницы {location.pathname} не существует</p>
      <Link href={'/'}>На главную страницу</Link>
    </div>
  )
}