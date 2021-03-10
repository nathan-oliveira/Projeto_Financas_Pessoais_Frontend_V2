import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_PROFILE } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'profile',
  initialState: {
    data: []
  },
  fetchConfig: (token) => GET_PROFILE(token)
})

export const fetchProfile = slice.asyncAction;
export default slice.reducer;