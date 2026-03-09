import styles from './Post.module.css'


export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://i.pravatar.cc/150?u=gabrielkras" alt=""/>
                
                <div className={styles.authorInfo}>
                <strong>Gabriel Kras</strong>
                <span>Maluco Beleza</span>
                
                </div>
                </div>

                <time title="09 de Março de 2026" dateTime="2026-03-09 18:10:58">
                    Publicado Há 2h
                </time>

            </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,
                    evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    </p>

                    <p><a href="#">👉 jane.design/doctorcare</a></p>

                    <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                    </p>
                </div>




        </article>
    )
}