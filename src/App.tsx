import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cthaiur.png',
      name: 'Felipe Silveira',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { 
        type: 'paragraph', 
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que desenvolvi na NLW Return, evento da Rocketseat. Nele, implementei diversas funcionalidades, como autenticação, banco de dados e interface responsiva.' 
      },
      { type: 'link', content: '👉 [link](https://github.com/thaiur/nlw-return)' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2026-02-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pravatar.cc/600',
      name: 'Marcela Braga',
      role: 'Web Developer Top'
    },
    content: [
      { type: 'paragraph', content: 'Fala rapeize 👋' },
      { 
        type: 'paragraph', 
        content: 'Eu não aguento mais nem olhar o VSCode, mais alguém com isso?.' 
      },
      { type: 'link', content: '👉 [link](https://socorro.com' },
      { type: 'link', content: '#meajuda' },
      { type: 'link', content: '#sos' },
      { type: 'link', content: '#ihatejs' },
    ],
    publishedAt: new Date('2025-12-10 20:00:00'),
  },
]















export function App(){



  return (
    <div>
  <Header />

      <div className={styles.wrapper}>
      <Sidebar />

        <main>
        {posts.map(post => (
            <Post 
            key={post.id} 
            author={post.author} 
            content={post.content} 
            publishedAt={post.publishedAt} 

            />
            ))}
            
              
        
        </main>

      </div>
    </div>
  )
}