import { combineReducers } from '@reduxjs/toolkit'

import userPost from './user/userPost'
import token from './user/token'
import validarToken from './user/validarToken'
import menu from './menu/menuToggle'

import recipe from './business/recipeGet'
import business from './business/businessGet'
import businessGetId from './business/businessGetId'
import businessPost from './business/businessPost'
import businessPut from './business/businessPut'

import goals from './goals/goalsGet'
import goalPost from './goals/goalPost'
import goalDelete from './goals/goalDelete'
import goalGetId from './goals/goalGetId'
import goalPut from './goals/goalPut'

import category from './category/categoryGet'
import categoryPost from './category/categoryPost'
import categoryGetId from './category/categoryGetId'

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
  goalDelete,
  goalGetId,
  goalPut,
  category,
  categoryPost,
  categoryGetId
})

export default rootReducer;