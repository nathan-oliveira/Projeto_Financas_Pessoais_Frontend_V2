import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_BUSINESS_ID } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'businessGetId',
  initialState: {
    recipe: {}
  },
  fetchConfig: ({ id, token }) => GET_BUSINESS_ID({ id, token })
})

export const businessGetId = slice.asyncAction;

export default slice.reducer;