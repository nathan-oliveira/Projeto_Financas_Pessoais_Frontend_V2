import createAsyncSlice from 'store/helper/createAsyncSlice'
import { VALIDAR_TOKEN } from 'Services/api'

const slice = createAsyncSlice({
  name: 'validarToken',
  fetchConfig: (token) => VALIDAR_TOKEN(token)
})

export const validarToken = slice.asyncAction;
export const { fetchError: fetchErrorToken } = slice.actions;

export default slice.reducer;