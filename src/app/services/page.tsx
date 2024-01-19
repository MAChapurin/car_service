'use client'

import { TabBar } from "@/UI";
import { Section, ServicesLinkList, ServicesList } from "@/components";
import { servicesTitles, detailsServices } from "@/constants";

import styles from './services.module.css'

export default function Services() {
  function handlerTab(e: React.SyntheticEvent) {
    console.log(e.target)
    console.log(detailsServices)
  }
  
  return (
    <Section title="Услуги">
      <TabBar className={styles.tabbar} list={servicesTitles} callback={handlerTab} />
      <ServicesLinkList className={styles.ul} list={[...detailsServices]} />
    </Section>
  )
}