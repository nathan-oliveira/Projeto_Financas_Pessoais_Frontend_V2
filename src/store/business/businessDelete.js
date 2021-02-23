import createAsyncSlice from '../helper/createAsyncSlice'
import { DELETE_BUSSINESS } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'businessDelete',
  fetchConfig: ({ id, token }) => DELETE_BUSSINESS({ id, token })
})

export const businessDelete = slice.asyncAction;
export default slice.reducer