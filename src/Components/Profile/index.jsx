import React from 'react'
import styles from './Profile.module.scss'

import Head from '../Helper/Head'
import Breadcrumb from '../Template/Breadcrumb'
import Avatar from '../../Assets/img/avatar.png'

const Profile = () => {
  const [img, setImg] = React.useState(Avatar)

  return (
    <section>
      <Head title="Minha Conta" />
      <Breadcrumb title="Minha Conta" path="Informações de Usuário" />

      <div className={`${styles.content__page} animeLeft`}>
        <div className={styles.content__image}>
          <img src={img} alt="Foto de Perfil" width="200px" />
        </div>
        <div className={styles.content__form}>
        </div>
      </div>
    </section>
  )
}

export default Profile
