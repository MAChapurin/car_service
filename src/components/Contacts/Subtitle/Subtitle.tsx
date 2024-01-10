import styles from './Subtitle.module.css'

interface ISubtitle {
  subtitle: string
}

export function Subtitle({subtitle}: ISubtitle) {
  return (
    <span className={styles.contacts__subtitle}>{subtitle}</span>
  )
}