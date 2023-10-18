import { ImgHTMLAttributes } from 'react'

import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps){
  /*const hasBorder = props.hasBorder != false*/
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} //Se o hasBorder for true, adiciona borda no avatar, caso seja false, não adiciona.
      {...props}
     // src={src}
     // alt={alt}
    //title={title}
    />
  )
}
