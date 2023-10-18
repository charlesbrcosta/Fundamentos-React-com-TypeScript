import { Trash } from "phosphor-react"
import { ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

import styles from "./Comment.module.css"

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  };

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });        
  }

  return (
    <div className={ styles.comment }>
      <Avatar hasBorder={ false } src="https://www.github.com/charlesbrcosta.png" alt="" />
      <div className={ styles.commentBox }>
        <div className={ styles.commentContent }>
          <header>
            <div className={ styles.authorAndTime }>
              <strong>Charles Bruno</strong>
              <time title="09 de outubro às 20:47" dateTime="2023-10-09 20:48:00" >{" "}
                Há cerca de 1 hora{" "}
              </time>
            </div>
            <button onClick={ handleDeleteComment } title="Deletar comentário">
              <Trash size={ 24 } />
            </button>
          </header>
          <p>{ content }</p>
        </div>
        <footer>
          <button onClick={ handleLikeComment }>
            <ThumbsUp />
            Aplaudir <span>{ likeCount }</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
