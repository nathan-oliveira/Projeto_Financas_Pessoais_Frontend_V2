import createAsyncSlice from '../helper/createAsyncSlice'
import { POST_USER } from '../../Services/api'
import { fetchLogin, resetTokenState } from './token'
import { validarToken, fetchErrorToken } from './validarToken'

const slice = createAsyncSlice({
  name: 'userPost',
  fetchConfig: (formData) => POST_USER(formData),
})

export const userPost = slice.asyncAction;

export const userLogin = (dataForm) => async (dispatch) => {
  const { payload } = await dispatch(fetchLogin(dataForm))

  if (payload.token) {
    window.localStorage.setItem('token', payload.token)
  }
}

export const userLogout = () => async (dispatch) => {
  dispatch(resetTokenState({ token: null }))
  window.localStorage.removeItem('token')
}

export const verifyToken = () => async (dispatch, getState) => {
  const { token } = getState()

  if (token?.data?.token) {
    const { type } = await dispatch(validarToken(token.data.token))
    if (type === fetchErrorToken.type) dispatch(userLogout());
  }
}

export default slice.reducer;