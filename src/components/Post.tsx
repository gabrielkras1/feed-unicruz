import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Comment } from './Comment'


import styles from './Post.module.css'


export function Post(){

      const publishedDate = new Date('2026-03-09 14:32:22')
      const publishedDateFormatted = format(publishedDate, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
      })
      const publishedDateRelativeToNow = formatDistanceToNow(publishedDate,{
        locale: ptBR,
        addSuffix: true,
      })



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

                <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                    Publicado há {publishedDateRelativeToNow}
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

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder="Deixe um comentário"/>

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                    
                </div>

        </article>
    )
}