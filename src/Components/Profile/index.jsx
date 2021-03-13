import React from 'react'
import styles from './Profile.module.scss'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'
import Modal from 'Components/Template/Modal'
import Summary from 'Components/Template/Modal/Summary'
import Details from 'Components/Template/Modal/Details'

import Form from './Form'
import FormModal from './FormModal'
import ImageProfile from './Image'

const Profile = () => {
  return (
    <section>
      <Head title="Minha Conta" />
      <Breadcrumb title="Minha Conta" path="Informações de Usuário" />

      <div className={`${styles.content__page} animeLeft`}>
        <div className={styles.content__image}>
          <ImageProfile />
          <Details>
            <Summary>
              <div className={styles.content__image__button}>Alterar Foto</div>
            </Summary>
            <Modal title="Alterar Foto">
              <FormModal />
            </Modal>
          </Details>
        </div>
        <div className={styles.content__form}>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Profile
