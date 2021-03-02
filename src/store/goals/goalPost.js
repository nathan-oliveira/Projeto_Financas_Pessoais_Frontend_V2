import createAsyncSlice from '../helper/createAsyncSlice'
import { POST_GOAL } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'goalPost',
  fetchConfig: ({ formData, token }) => POST_GOAL({ formData, token })
})

export const goalPost = slice.asyncAction;
export default slice.reducer;