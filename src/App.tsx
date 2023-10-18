import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

//author: { avatar_url: "", name: "", role: "", }
//content: String
//publishedAt: Date

const posts = [
  //Simulando uma estrutura do back-end - servidor
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/charlesbrcosta.png",
      name: "Charles Bruno",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 bruno.web-developer/doctorcare" },
    ],
    publishedAt: new Date("2023-10-12 13:31:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "diego3g.back-end/doctorcare" },
    ],
    publishedAt: new Date("2023-10-07 07:23:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://www.github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "maykbrito.front-end/doctorcare" },
    ],
    publishedAt: new Date("2023-10-05 11:27:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
                <Post 
                  key={ post.id }
                  author={ post.author }
                  content={ post.content }
                  publishedAt={ post.publishedAt }
                />
              )
          })}
        </main>
      </div>
    </div>
  )
}
