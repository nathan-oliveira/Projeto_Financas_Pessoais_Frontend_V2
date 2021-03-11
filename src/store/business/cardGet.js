import createAsyncSlice from '../helper/createAsyncSlice'
import { GET_BUSINESS } from '../../Services/api'
import { numeroPreco } from '../../Helpers'

const slice = createAsyncSlice({
  name: 'business',
  initialState: {
    cardFinanceiro: {
      receita: '0',
      despesa: '0',
      total: '0'
    },
  },
  reducers: {
    getFinanceiro(state, action) {
      state.cardFinanceiro = action.payload
    },
  },
  fetchConfig: (token) => GET_BUSINESS(token)
})

export const fetchBusiness = slice.asyncAction;
export const { getFinanceiro } = slice.actions;

export const businessCard = () => async (dispatch, getState) => {
  const { user } = getState()
  const { payload } = await dispatch(fetchBusiness(user.data.token));

  let state = { receita: 0, despesa: 0, total: 0 }
  let valorReceita = 0;
  let valorDespesa = 0;

  Object.keys(payload).forEach((item) => {
    if (payload[item].types === 'receita') valorReceita += parseFloat((payload[item].money));
    if (payload[item].types === 'despesa') valorDespesa += parseFloat((payload[item].money));
  });

  state.receita = numeroPreco(valorReceita);
  state.despesa = numeroPreco(valorDespesa);
  state.total = numeroPreco(valorReceita - valorDespesa);

  dispatch(getFinanceiro(state))
}

export default slice.reducer;