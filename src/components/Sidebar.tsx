import styles from './Sidebar.module.css'

import {PencilSimpleLine} from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://avatars.githubusercontent.com/u/170683186?v=4" alt=""/>
        
                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/170683186?v=4" alt="" />


                    <strong>GabrielKras</strong>
                    <span>Maluco Beleza</span>
                </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                    </a>
            </footer>
        
        
        
        </aside>
    )
}