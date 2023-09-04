import {createReducer} from '@reduxjs/toolkit';
import {
  changeLanguages,
  handleLoadMore,
  handleLoading,
  internetConnection,
  spinningLoading,
} from '../actions';

const initialState = false;
const spining = false;
const internet = false;
const tap = 'homeScreen';
const state = 'en';
const usercart = null;
const handle_time = false;
const message_update = false;

export const loadingReducer = createReducer(initialState, builder => {
  builder.addCase(handleLoading, (state, action: any) => {
    return action.payload;
  });
});

export const loadMoreReducer = createReducer(initialState, builder => {
  builder.addCase(handleLoadMore, (state, action: any) => {
    return action.payload;
  });
});

export const spinningLoadingReducer = createReducer(spining, builder => {
  builder.addCase(spinningLoading, (state, action: any) => {
    return action.payload;
  });
});

export const internet_connection = createReducer(internet, builder => {
  builder.addCase(internetConnection, (state, action: any) => {
    return action.payload;
  });
});

export const LanguageReducer = createReducer(state, builder => {
  builder.addCase(changeLanguages, (state, action: any) => {
    return action.payload;
  });
});
