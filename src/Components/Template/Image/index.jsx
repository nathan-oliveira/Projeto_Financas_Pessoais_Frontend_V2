import React from 'react'
import styles from './image.module.scss'

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad() {
    setSkeleton(false);
  }

  return (
    <React.Fragment>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={`${skeleton ? styles.img : styles.imgs}`} alt={alt} {...props} />
    </React.Fragment>
  )
}

export default Image
