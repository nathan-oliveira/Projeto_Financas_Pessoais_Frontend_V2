import createAsyncSlice from '../helper/createAsyncSlice'
import { numeroPreco } from '../../Helpers'
import { GET_BUSINESS } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'recipe',
  initialState: {
    business: []
  },
  reducers: {
    setBusiness(state, action) {
      state.business = action.payload
    },
  },
  fetchConfig: (token) => GET_BUSINESS(token)
})

export const fetchBusiness = slice.asyncAction;
export const { setBusiness } = slice.actions;

export const getBusiness = (business) => async (dispatch, getState) => {
  const { user } = getState()
  const { payload } = await dispatch(fetchBusiness(user.data.token));
  let recipe = [];

  payload.forEach((item) => {
    if (item.types === business) recipe.push({
      id: item.id,
      description: item.description,
      money: numeroPreco(item.money),
      category: item.categoryId.name
    })
  })

  dispatch(setBusiness(recipe))
}

export default slice.reducer;