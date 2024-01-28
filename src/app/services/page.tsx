'use client'
import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from "react";

import { Input, TabBar } from "@/UI";
import { Section, ServicesLinkList } from "@/components";
import { servicesTitles, detailsServices } from "@/constants";

import cn from 'classnames'
import styles from './services.module.css'

export default function Services() {
  const [sortType, setSortType] = useState<string>()
  const [search, setSearch] = useState<string>('')

  function handleTab(e: SyntheticEvent<HTMLButtonElement, Event>) {
    setSearch('')
    if (e.target instanceof HTMLButtonElement) {
      const value = e.target.dataset.type
      setSortType(value)
    }
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target) {
      setSortType(undefined)
      setSearch(e.target.value)
    }
  }

  function handleBlur() {
    setSearch('')
    setSortType(undefined)
  }

  const filterTabs = [...detailsServices]
    .filter(el => {
      if (!sortType) return el
      return el.type === sortType
    })

  const filterSearch = [...detailsServices]
    .filter(el => el.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase()))

  const all = {
    title: 'Все',
    type: undefined
  }

  return (
    <Section title="Услуги">
      <Input
        onChange={handleSearch}
        // onBlur={handleBlur}
        placeholder={'Я ищу...'}
        type="search"
        value={search} />
      <TabBar
        className={styles.tabbar}
        list={[...servicesTitles, all]}
        callback={handleTab}
        sortType={sortType} />
      {search!?.length === 0 &&
        <ServicesLinkList
          className={styles.ul}
          list={filterTabs} />}
      {
        search &&
        <ServicesLinkList
          list={filterSearch}
        />
      }

      {
        filterSearch.length === 0 &&
        <p className={styles.message}>
          По вашему запросу ничего не найдено
        </p>
      }
    </Section>
  )
}