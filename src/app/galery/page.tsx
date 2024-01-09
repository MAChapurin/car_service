import { Galery } from "@/components";

import { galeryData } from "@/constants";

import styles from './galery.module.css'

export default function GaleryPage() {

  const reverseData = [...galeryData].reverse();
  return (
    <>
    <h1 className={styles.h1}>Фотогалерея</h1>
    <Galery list={galeryData}/>
    <Galery list={reverseData}/>
    <Galery list={galeryData}/>
    <Galery list={reverseData}/>
    </>
  )
}