import { combineReducers } from '@reduxjs/toolkit'

import userPost from './user/userPost'
import token from './user/token'
import validarToken from './user/validarToken'
import business from './business/businessGet'
import recipe from './business/recipeGet'
import menu from './menu/menuToggle'
import businessGetId from './business/businessGetId'
import businessPost from './business/businessPost'
import businessPut from './business/businessPut'
import goals from './goals/goalsGet'
import goalPost from './goals/goalPost'
import category from './category/categoryGet'
import categoryPost from './category/categoryPost'

const rootReducer = combineReducers({
  userPost,
  token,
  validarToken,
  business,
  menu,
  recipe,
  businessPost,
  businessGetId,
  businessPut,
  goals,
  goalPost,
  category,
  categoryPost
})

export default rootReducer;