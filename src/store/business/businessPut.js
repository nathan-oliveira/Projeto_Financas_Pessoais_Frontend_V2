import createAsyncSlice from '../helper/createAsyncSlice'
import { PUT_BUSSINESS } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'businessPut',
  fetchConfig: ({ id, formData, token }) => PUT_BUSSINESS({ id, formData, token })
})

export const businessPut = slice.asyncAction;
export default slice.reducer;