'use client'
import Link from "next/link"
 
export default function _404() {

 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href={'/'}>На главную</Link>
    </div>
  )
}