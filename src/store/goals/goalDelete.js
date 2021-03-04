import createAsyncSlice from '../helper/createAsyncSlice'
import { DELETE_GOAL } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'goalDelete',
  fetchConfig: ({ id, token }) => DELETE_GOAL({ id, token })
})

export const goalDelete = slice.asyncAction;
export default slice.reducer;