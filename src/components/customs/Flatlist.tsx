import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Platform,
  View,
} from 'react-native';
import {useAppSelector} from '../../hooks/dispatch';
import {makeid} from '../../utils';
import NoData from './NoData';
import colors from '../../themes/colors';
import {paddingHorizontal} from '../../themes/layout';

export const FlatListScroll = React.forwardRef((props: any, ref: any) => {
  return (
    <FlatList
      ref={ref}
      {...props}
      refreshControl={props.refreshControl}
      nestedScrollEnabled
      listKey={makeid()}
      cellKey={makeid()}
      removeClippedSubviews={Platform.OS == 'ios' ? false : true}
      showsVerticalScrollIndicator={false}
      data={['dumy']}
      renderItem={() => {
        return props.children;
      }}
      bounces={false}
      scrollEventThrottle={16}
      onEndReachedThreshold={0.01}
      ListEmptyComponent={null}
      ListHeaderComponent={null}
      keyExtractor={(_: any, index: {toString: () => any}) => index.toString()}
      // legacyImplementation
    />
  );
});

export const FlatListScrollAnimated = React.forwardRef(
  (props: any, ref: any) => {
    return (
      <Animated.FlatList
        ref={ref}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        data={['dumy']}
        renderItem={() => {
          return props.children;
        }}
        bounces={false}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.01}
        ListEmptyComponent={null}
        ListHeaderComponent={null}
        keyExtractor={(_: any, index: {toString: () => any}) =>
          index.toString()
        }
        {...props}
        keyboardShouldPersistTaps={
          props.keyboardShouldPersistTaps ? 'handled' : undefined
        }
        // legacyImplementation
      />
    );
  },
);

export function FlatListHorizontal(props: any) {
  const keyExtractor = useCallback((_: any, index: any) => {
    return index.toString();
  }, []);
  const getItemLayout = useCallback(
    (_: any, index: any) => ({
      length: props.ITEM_HEIGHT,
      offset: props.ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <FlatList
      listKey={makeid()}
      cellKey={makeid()}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={Platform.OS == 'ios' ? false : true}
      horizontal
      data={props.data}
      // bounces={false}
      scrollEventThrottle={16}
      renderItem={props.renderItem}
      getItemLayout={props.ITEM_HEIGHT ? getItemLayout : null}
      keyExtractor={keyExtractor}
      {...props}
      keyboardShouldPersistTaps={
        props.keyboardShouldPersistTaps ? 'handled' : undefined
      }
      // legacyImplementation
    />
  );
}

export const FlatListVertical = React.forwardRef((props: any, ref: any) => {
  const loading = useAppSelector(state => state.loading);
  const keyExtractor = useCallback((_: any, index: any) => {
    return index.toString();
  }, []);
  const getItemLayout = useCallback(
    (_: any, index: any) => ({
      length: props.ITEM_HEIGHT,
      offset: props.ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <FlatList
      ref={ref}
      listKey={makeid()}
      cellKey={makeid()}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={Platform.OS == 'ios' ? false : true}
      data={props.data}
      // bounces={false}
      scrollEventThrottle={16}
      nestedScrollEnabled
      onEndReachedThreshold={0.01}
      renderItem={props.renderItem}
      getItemLayout={props.ITEM_HEIGHT ? getItemLayout : null}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<>{!loading && <NoData />}</>}
      {...props}
      keyboardShouldPersistTaps={
        props.keyboardShouldPersistTaps ? 'handled' : undefined
      }
      // legacyImplementation
    />
  );
});

export function FlatListFooter() {
  return (
    <ActivityIndicator
      size="large"
      color={colors.baseColor}
      style={{marginBottom: paddingHorizontal, alignSelf: 'center'}}
    />
  );
}
export function ActivateIndicator() {
  return <ActivityIndicator size="large" color={colors.baseColor} />;
}

export const ClearItem = () => {
  return <View style={{height: paddingHorizontal}} />;
};
