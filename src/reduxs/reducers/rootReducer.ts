import {combineReducers} from '@reduxjs/toolkit';
import {
  LanguageReducer,
  internet_connection,
  loadMoreReducer,
  loadingReducer,
  spinningLoadingReducer,
} from './index';

const rootReducer = combineReducers({
  no_connection: internet_connection,
  spinning: spinningLoadingReducer,
  loading: loadingReducer,
  loadMore: loadMoreReducer,
  lang: LanguageReducer,
});

export type ReducerProps = ReturnType<typeof rootReducer>;

export default rootReducer;
