'use client'

import { TabBar } from "@/UI";
import { Section, ServicesList } from "@/components";
import { servicesTitles } from "@/constants";

import styles from './services.module.css'

export default function Services() {
  function handlerTab(e: React.SyntheticEvent) {
    console.log(e.target)
  }
  return (
    <Section title="Услуги">
      <TabBar className={styles.tabbar} list={servicesTitles} callback={handlerTab} />
      <ServicesList className={styles.ul} list={[...servicesTitles, ...servicesTitles, ...servicesTitles]} />
    </Section>
  )
}