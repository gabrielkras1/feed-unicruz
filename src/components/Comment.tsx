import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void; // Tipagem da função recebida
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    
    function handleDeleteComment() {
        // Chamamos a função do pai passando o conteúdo deste comentário específico
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://i.pravatar.cc/300" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Kras</strong>
                            <time title="1 hora atrás" dateTime="2026-03-01 20:00:00">
                                Publicado há 1h
                            </time>
                        </div>

                        {/* Evento de clique disparando a remoção */}
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}