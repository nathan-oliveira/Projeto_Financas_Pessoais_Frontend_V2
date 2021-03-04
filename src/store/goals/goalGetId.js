import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_GOAL_ID } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'goalGetId',
  fetchConfig: ({ id, token }) => GET_GOAL_ID({ id, token })
})

export const goalGetId = slice.asyncAction;
export default slice.reducer;