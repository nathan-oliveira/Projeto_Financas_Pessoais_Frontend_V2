import createAsyncSlice from '../helper/createAsyncSlice'
import { DELETE_CATEGORY } from '../../Services/api'

const slide = createAsyncSlice({
  name: 'categoryDelete',
  fetchConfig: ({ id, token }) => DELETE_CATEGORY({ id, token })
})

export const categoryDelete = slide.asyncAction
export default slide.reducer