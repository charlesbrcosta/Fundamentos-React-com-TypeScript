import { Comment } from "./Comment.jsx"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

import styles from "./Post.module.css"

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;

}

interface PostPros {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

//desestruturacao da propriedade para não repetir props toda vez que retornar um objeto
export function Post({ author, publishedAt, content }: PostPros){

  //controla todos os comentários existentes no componente POST
  const [ comments, setComments ] = useState([
    'Poste muito bancana, Hein?!',
  ])
  //Monitora tudo que é digitado no campo textarea
  const [ newCommentText, setCommentText ] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBr,
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault();   
    
    setComments([...comments, newCommentText]);
    setCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('');
    setCommentText(event.target.value);    
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete: string){
    const commentsWithOutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithOutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={ styles.post }>
      <header>
        <div className={ styles.author }>
          <Avatar src={ author.avatarUrl } />
          <div className={ styles.authorInfo }>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>
        <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={ line.content }>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={ line.content }><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment' 
          placeholder="Deixe seu comentário" 
          value={ newCommentText }
          onChange={ handleNewCommentChange }
          onInvalid={ handleNewCommentInvalid }
          required
        />

        <footer>
          <button type="submit" disabled={ isNewCommentEmpty }>
            Publicar
          </button>
        </footer>
      </form>

      <div className={ styles.commentList }>
        {comments.map(comment => {
          return (
            <Comment 
              key={ comment }
              content={ comment }
              onDeleteComment={ deleteComment }
            />
          )
        })}    
      </div>
    </article>
  )
}
