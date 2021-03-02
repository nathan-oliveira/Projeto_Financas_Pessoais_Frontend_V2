import createAsyncSlice from '../helper/createAsyncSlice'
import { POST_BUSSINESS } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'businessPost',
  fetchConfig: ({ formData, token }) => POST_BUSSINESS({ formData, token })
})

export const businessPost = slice.asyncAction;
export default slice.reducer;