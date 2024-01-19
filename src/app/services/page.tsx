'use client'

import { TabBar } from "@/UI";
import { Section, ServicesLinkList, ServicesList } from "@/components";
import { servicesTitles, detailsServices } from "@/constants";

import styles from './services.module.css'
import { useState } from "react";

export default function Services() {
  const [sortType, setSortType] = useState<string>()
  function handlerTab(e: React.SyntheticEvent) {
    // console.log(e.target)  
    if(e.target instanceof HTMLButtonElement) {
      console.log(e.target.dataset.type)
      const value = e.target.dataset.type
      setSortType(value)
    }
  }

  const all = {
    title: 'Все',
    type: undefined
  }

  return (
    <Section title="Услуги">
      <TabBar
        className={styles.tabbar}
        list={[...servicesTitles, all]}
        callback={handlerTab} 
        sortType={sortType}/>
      <ServicesLinkList
        className={styles.ul}
        list={[...detailsServices].filter(el => {
          if (!sortType) return el
          return el.type === sortType
        })} />
    </Section>
  )
}