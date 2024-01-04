import { Logo } from '@/UI'
import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>

        <Logo />
        <button className={styles.header__btn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7Z" fill="white" />
            <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="white" />
            <path d="M4 17C4 16.4477 4.44772 16 5 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H5C4.44772 18 4 17.5523 4 17Z" fill="white" />
          </svg>
          Услуги
        </button>

        <nav>
          
        </nav>

      </header>
    </div>
  )
}