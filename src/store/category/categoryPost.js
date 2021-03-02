import createAsyncSlice from '../helper/createAsyncSlice'
import { POST_CATEGORY } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'categoryPost',
  fetchConfig: ({ formData, token }) => POST_CATEGORY({ formData, token })
})

export const categoryPost = slice.asyncAction;
export default slice.reducer;