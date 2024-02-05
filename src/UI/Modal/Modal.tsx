'use client'

import { ModalProps } from "./Modal.props";
import { useEffect, useLayoutEffect, useRef } from "react";

import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from "@/hooks/useClickOutside";

import styles from './Modal.module.css'

const backgroundAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const contentAnimation = {
  hidden: {
    x: 10,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export function Modal({ children, isVisible, onClose }: ModalProps) {
  const contentRef = useRef(null)

  useClickOutside(contentRef, onClose)

  useLayoutEffect(()=> {
    
  },[])

  useEffect(() => {
    const body = document.querySelector('body')
    body?.setAttribute('style', `overflow: ${isVisible ? 'hidden' : 'auto'}`)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible &&
        <motion.div
          initial={backgroundAnimation.hidden}
          whileInView={backgroundAnimation.visible}
          exit={backgroundAnimation.hidden}
          className={styles.modal}>
          <motion.div
            initial={contentAnimation.hidden}
            whileInView={contentAnimation.visible}
            exit={contentAnimation.hidden}
            className={styles.content}
            ref={contentRef}>
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}