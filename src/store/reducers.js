import { combineReducers } from '@reduxjs/toolkit'

import userPost from './user/userPost'
import user from './user/user'
import validarToken from './user/validarToken'
import menu from './menu/menuToggle'
import business from './business/businessGet'
import cardBusiness from './business/cardGet'

const rootReducer = combineReducers({
  userPost,
  user,
  validarToken,
  cardBusiness,
  menu,
  business
})

export default rootReducer;