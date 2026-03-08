import styles from './Header.module.css'
import unicruzlogo from '../assets/unicruz-logo.svg'


export function Header() {
    return (
        <div className={styles.header}>
            <img src={unicruzlogo} alt= "Logo da Unicruz" />
            <strong>Ciência da Computação - UNICRUZ</strong>
        </div>
    )
}