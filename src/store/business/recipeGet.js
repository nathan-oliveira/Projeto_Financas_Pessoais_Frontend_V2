import createAsyncSlice from '../helper/createAsyncSlice'
import { numeroPreco } from '../../Helpers'
import { GET_BUSINESS } from '../../Services/api'

const slice = createAsyncSlice({
  name: 'recipe',
  initialState: {
    recipe: []
  },
  reducers: {
    getRecipe(state, action) {
      state.recipe = action.payload
    },
  },
  fetchConfig: (token) => GET_BUSINESS(token)
})

export const fetchRecipes = slice.asyncAction;
export const { getRecipe } = slice.actions;

export const fetchReceita = () => async (dispatch, getState) => {
  const { token } = getState()
  const { payload } = await dispatch(fetchRecipes(token.data.token));
  let recipe = [];

  payload.forEach((item) => {
    if (item.types === 'receita') recipe.push({
      id: item.id,
      description: item.description,
      money: numeroPreco(item.money),
      category: item.categoryId.name
    })
  })

  await dispatch(getRecipe(recipe))
}

export default slice.reducer;