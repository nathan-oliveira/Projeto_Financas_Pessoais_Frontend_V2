import createAsyncSlice from '../helper/createAsyncSlice'
import { POST_LOGIN } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: window.localStorage.getItem('token') || null,
      name: window.localStorage.getItem('name') || null
    }
  },
  fetchConfig: (dataForm) => POST_LOGIN(dataForm)
})

export const fetchLogin = slice.asyncAction;
export const { resetState: resetTokenState } = slice.actions;

export default slice.reducer;