import createAsyncSlice from '../helper/createAsyncSlice'
import { PUT_GOAL } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'goalPut',
  fetchConfig: ({ id, formData, token }) => PUT_GOAL({ id, formData, token })
})

export const goalPut = slice.asyncAction;
export default slice.reducer;