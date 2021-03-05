import createAsyncSlice from '../helper/createAsyncSlice'
import { PUT_CATEGORY } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'categoryPut',
  fetchConfig: ({ id, formData, token }) => PUT_CATEGORY({ id, formData, token })
})

export const categoryPut = slice.asyncAction
export default slice.reducer;
