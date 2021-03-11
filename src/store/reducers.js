import { combineReducers } from '@reduxjs/toolkit'

import userPost from './user/userPost'
import token from './user/token'
import validarToken from './user/validarToken'
import menu from './menu/menuToggle'
import business from './business/businessGet'
import cardBusiness from './business/cardGet'

const rootReducer = combineReducers({
  userPost,
  token,
  validarToken,
  cardBusiness,
  menu,
  business
})

export default rootReducer;