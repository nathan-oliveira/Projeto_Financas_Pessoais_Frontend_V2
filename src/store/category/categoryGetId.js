import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_CATEGORY_ID } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'categoryGetId',
  fetchConfig: ({ id, token }) => GET_CATEGORY_ID({ id, token })
})

export const categoryGetId = slice.asyncAction
export default slice.reducer;