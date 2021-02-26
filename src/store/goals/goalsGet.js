import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_GOALS } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'goals',
  initialState: {
    data: []
  },
  fetchConfig: (token) => GET_GOALS(token)
})

export const fetchGoals = slice.asyncAction;
export default slice.reducer;