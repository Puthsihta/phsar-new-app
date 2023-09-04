import {createAction} from '@reduxjs/toolkit';

export const handleLoadMore = createAction<boolean>('loadMore');
export const handleLoading = createAction<boolean>('loading');
export const spinningLoading = createAction<boolean>('spinningLoading');
export const internetConnection = createAction<boolean>('internetConnection');
export const changeLanguages = createAction<string>('changeLanguages');
