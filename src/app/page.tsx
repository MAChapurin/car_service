import { Advantages, Article, Galery, Hero, Section, ServicesList } from "@/components";

import { advantages, galeryData, servicesTitles } from "@/constants";

import styles from './layout.module.css'

export default function Home() {
  
  return (
    <>
      <Hero
        title={'CITY SERVIS AUTOMATIC'}
        description="Безопасность и надежность работы автомобиля"
        buttonContent={'Консультация'}
      // background={'url(/car-hero-1920.jpg)'}
      />
      <Section title={'О нас'}>
        <Article
          quote={'Кто мы? Наши цели'}
          description={`Csa-servis – это специализированное предприятие,
          занимающееся ремонтом и техническим обслуживанием автомобилей
          различных марок и моделей, а так же всех видов трансмиссий.
          Это место, куда владельцы автомобилей обращаются,
          чтобы получить профессиональную помощь в решении любых проблем,
          связанных с их автомобилями. Основная цель нашего сервиса – обеспечить 
          безопасность и надежность работы автомобиля, а также продлить его срок службы.
          В csa-servis работают специалисты, хорошо знакомые со всеми аспектами автомобильной техники, от механики и
          электрики до электроники и диагностики. Они имеют необходимые знания и опыт,
          чтобы быстро и качественно провести любые виды ремонтных и обслуживающих работ.`}
          href={'/about'}
          src={'/about-car-1920.jpg'}
        />
      </Section>
      <Section title={'Наши услуги'}>
        <ServicesList list={servicesTitles} />
      </Section>
      <Section title="Фотогалерея">
        <Galery list={galeryData} isLink/>
      </Section>
      <Section title="Наши преимущества">
      <Advantages list={advantages}/>
      </Section>
      <Section title="Полезные статьи">

      </Section>
      <Section title="Контакты">

      </Section>
    </>
  )
}
