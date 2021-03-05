import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_CATEGORY } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'category',
  initialState: {
    data: []
  },
  fetchConfig: (token) => GET_CATEGORY(token)
})

export const fetchCategory = slice.asyncAction
export default slice.reducer;