import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/dispatch';
import {handleChange} from '../../utils/state';
import {navigate} from '../../services/navigate';
import Search from '../../screens/homes/Search';
import {useStatusBar} from '../../utils';
import colors from '../../themes/colors';
let page: number = 1;
const SearchScreen = () => {
  useStatusBar('light-content', colors.baseColor);
  const loading = useAppSelector(state => state.loading);
  const isLoadMore = useAppSelector(state => state.loadMore);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    text: '',
    isRefresh: false,
  });
  const inputRef = React.createRef<TextInput>();
  // const showbottomSheet = React.useRef<RBSheet>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (state.text.trim().length !== 0) {
      getData();
    }
  }, [state.text]);

  const getData = () => {
    // dispatch(handleLoading(true));
    // dispatch(clearSearchNews());
    // dispatch(requestSearchNews({keyword: state.text, page: 1}));
  };

  const onChangeState = (stateName: string, value: string | boolean) => {
    setState(handleChange(state, stateName, value));
  };

  // const onShowBottomSheet = () => {
  //   showbottomSheet.current?.open();
  // };
  // const onCloseBottomSheet = () => {
  //   showbottomSheet.current?.close();
  // };

  const onDetail = (id: number) => {
    // navigate(routes.home_detail, {id});
  };

  const onRefresh = () => {
    page = 1;
    getData();
    setState(handleChange(state, 'isRefresh', true));
    setTimeout(() => {
      setState(handleChange(state, 'isRefresh', false));
    }, 250);
  };
  const onLoadMore = () => {
    // if (page > 0 && data?.data.total > 20) {
    //   dispatch(handleLoadMore(true));
    //   setTimeout(async () => {
    //     dispatch(requestSearchNews({keyword: state.text, page: page + 1}));
    //     let _data: any = data?.listing;
    //     page = Math.ceil(_data?.length / data?.data?.per_page);
    //     if (data?.data?.total <= _data?.length) {
    //       page = 0;
    //     }
    //     dispatch(handleLoadMore(false));
    //   }, 200);
    // } else {
    //   dispatch(handleLoadMore(false));
    // }
  };
  return (
    <>
      <Search
        ref={inputRef}
        loading={loading}
        onPress={onDetail}
        text={state.text}
        isRefresh={state.isRefresh}
        isLoadMore={isLoadMore}
        onRefresh={onRefresh}
        onLoadMore={onLoadMore}
        onChangeState={onChangeState}
      />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
