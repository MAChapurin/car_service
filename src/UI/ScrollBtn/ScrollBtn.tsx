'use client'

import { useScroll } from "@/hooks";
import { Icon } from "@/components";

import { ScrollBtnProps } from "./ScrollBtn.props";

import cn from "classnames";
import styles from './ScrollBtn.module.css'

export function ScrollBtn(props: ScrollBtnProps) {

  const { scrollY } = useScroll()

  function scrollToUp() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <button
      className={cn(styles.btn,
        {
          [styles.shown]: scrollY > 500
        })}
      onClick={scrollToUp} {...props}>
      <Icon icon="arrowUp" />
    </button>
  )
}