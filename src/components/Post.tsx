export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/170683186?v=4" alt=""/>
                
                <div className={styles.authorInfo}>
                <strong>GabrielKras</strong>
                <span>Maluco Beleza</span>
                
                </div>
                </div>
            </header>
                <div>
                    <p>Publicação</p>
                    <p>Publicação</p>
                </div>




        </article>
    )
}