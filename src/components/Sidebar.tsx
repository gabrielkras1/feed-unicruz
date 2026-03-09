import styles from './Sidebar.module.css'

import {PencilSimpleLine} from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=50" alt=""/>
        
                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://i.pravatar.cc/150?u=gabrielkras" alt="" />


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