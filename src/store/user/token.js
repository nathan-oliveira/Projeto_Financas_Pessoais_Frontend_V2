import createAsyncSlice from '../helper/createAsyncSlice'
import { POST_LOGIN } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: window.localStorage.getItem('token') || null,
      name: window.localStorage.getItem('name') || "",
      email: "",
      foto: "",
      nivel: 0
    }
  },
  reducers: {
    setDataUser(state, action) {
      state.data.name = action.payload.name;
      state.data.email = action.payload.email;
      state.data.foto = action.payload.foto;
      state.data.nivel = action.payload.nivel
    },
    updateFoto(state, action) {
      state.data.foto = action.payload.foto
    }
  },
  fetchConfig: (dataForm) => POST_LOGIN(dataForm)
})

export const fetchLogin = slice.asyncAction;
export const { resetState: resetTokenState, setDataUser, updateFoto } = slice.actions;

export default slice.reducer;
