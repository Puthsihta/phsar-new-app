import {RefreshControl, StyleSheet, TextInput, View} from 'react-native';
import React, {RefObject} from 'react';
import BaseComponent from '../../components/customs/BaseComponent';
import {HStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Label} from '../../components/customs/Label';
import Feather from 'react-native-vector-icons/Feather';
import {
  FlatListFooter,
  FlatListVertical,
} from '../../components/customs/Flatlist';
import CardeRenderNews from '../../components/card/CardeRenderNews';
import ClearItem from '../../components/customs/ClearItem';
import style from '../../styles';
import {
  borderRadius,
  paddingHorizontal,
  widthRespone,
} from '../../themes/layout';
import colors from '../../themes/colors';
import Loading from '../../components/customs/Loading';
import {Battambang} from '../../services/configs/fonts';
interface data {
  ref: RefObject<TextInput>;
  loading: boolean;
  onPress: (id: number) => void;
  text: string;
  isRefresh: boolean;
  isLoadMore: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  onChangeState: (state: string, value: string | boolean) => void;
}

const recomment = [
  {name: 'គ្រោះថ្នាក់ចរាចរណ៍'},
  {name: 'គ្រឿងញៀន'},
  {name: 'កសិកម្ម'},
];

const Search: React.FC<data> = ({
  ref,
  loading,
  onPress,
  text,
  isRefresh,
  isLoadMore,
  onRefresh,
  onLoadMore,
  onChangeState,
}) => {
  const renderSearchHistory = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: paddingHorizontal,
        }}>
        <Label style={{color: colors.descriptionColor}}>
          គ្រោះថ្នាក់ចរាចរណ៍
        </Label>
        <Feather
          name={'x'}
          size={widthRespone(5)}
          color={colors.descriptionColor}
        />
      </View>
    );
  };

  // const renderRecommentSearches = (item: any) => {
  //   return (
  //     <TouchableOpacity onPress={() => {}} style={styles.wrapRecomment}>
  //       <Label style={styles.recommendText}>{item.name}</Label>
  //     </TouchableOpacity>
  //   );
  // };

  const renderItem = ({item, index}: any) => {
    return (
      <CardeRenderNews
        value={item}
        index={index}
        onPress={() => onPress(item.id)}
      />
    );
  };
  return (
    <BaseComponent title="search">
      <View style={style.flexContainer}>
        <View style={{backgroundColor: colors.baseColor}}>
          <View style={styles.wrapContainer}>
            <HStack alignItems="center">
              <Ionicons
                // onPress={data.onPressSearch}
                name="search-outline"
                size={widthRespone(5)}
                color={colors.descriptionColor}
              />
              <TextInput
                ref={ref}
                autoFocus={true}
                value={text}
                keyboardType="default"
                returnKeyType="search"
                placeholder={'ស្វែងរក'}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.input}
                onChangeText={(text: any) => onChangeState('text', text)}
                // onSubmitEditing={data.onSubmitText}
              />
            </HStack>
            {text && (
              <Feather
                onPress={() => onChangeState('text', '')}
                name={'x'}
                size={widthRespone(5)}
                color={colors.iconColor}
              />
            )}
            {/* <Feather
              name={'filter'}
              onPress={data.onShowBottomSheet}
              size={widthRespone(5)}
              color={colors.iconColor}
              style={{marginLeft: paddingHorizontal / 2}}
            /> */}
          </View>
        </View>

        {loading ? (
          <Loading />
        ) : (
          text.trim().length !== 0 && (
            <FlatListVertical
              data={[]}
              renderItem={renderItem}
              refreshControl={
                <RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />
              }
              ListFooterComponent={
                <>
                  {isLoadMore && <FlatListFooter />}
                  <ClearItem />
                </>
              }
              onEndReached={onLoadMore}
            />
          )
        )}

        {/* <View
          style={{
            margin: paddingHorizontal,
          }}>
          <TextTranslateBold>search_history</TextTranslateBold>
          {renderSearchHistory()}
        </View> */}
      </View>
      {/* <BottomSheet ref={data.filterRef} title={'select'} h={hightRespone(20)}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: paddingHorizontal,
          }}>
          {recomment.map(item => renderRecommentSearches(item))}
        </View>
      </BottomSheet> */}
    </BaseComponent>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: paddingHorizontal,
    backgroundColor: colors.whiteColor,
    borderRadius: borderRadius / 2,
    margin: paddingHorizontal,
    height: widthRespone(12),
    paddingHorizontal: paddingHorizontal,
  },
  input: {
    marginHorizontal: paddingHorizontal / 2,
    ...Battambang,
    width: '75%',
    fontSize: widthRespone(3.7),
    color: colors.titleColor,
  },
  wrapRecomment: {
    borderWidth: 1,
    borderColor: colors.primaryColor,
    padding: paddingHorizontal / 2,
    borderRadius: borderRadius / 2,
    marginRight: paddingHorizontal,
  },
  recommendText: {
    fontSize: widthRespone(3),
    color: colors.baseColor,
  },
});
