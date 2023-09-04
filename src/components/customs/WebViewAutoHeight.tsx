import React from 'react';
import {ActivityIndicator} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {useAppDispatch} from '../../hooks/dispatch';
import colors from '../../themes/colors';
import {paddingHorizontal, screenWidth} from '../../themes/layout';
interface data {
  description: string;
  fontSize?: any;
  refreshing?: any;
}
const WebViewAutoHeight: React.FC<data> = ({
  description,
  fontSize,
  refreshing,
}) => {
  const dispatch = useAppDispatch();
  const loadingComponent = () => (
    <ActivityIndicator
      color={colors.baseColor}
      size="large"
      style={{marginVertical: 20}}
    />
  );

  return (
    <>
      {refreshing && loadingComponent()}
      <AutoHeightWebView
        dataDetectorTypes="none"
        scrollEnabled={false}
        mixedContentMode="compatibility"
        style={{width: '100%'}}
        customStyle={`
          * {
        font-family: 'Battambang' !important;
            line-height:${1.5} !important;
            letter-spacing:${0.3}px !important;
            font-size:${fontSize}px !important;
            color: ${colors.blackColor};
            text-align: justify !important;
            object-fit : contain;
            padding-left: 6px;
            padding-right: 6px;
          }
          li{
              color: ${colors.baseColor};
              font-size:${17}px;
          }
          img {
            width: ${screenWidth(180)}px !important;
            height: auto;
            margin-top: ${paddingHorizontal / 1.5};
          }
          p{
            margin-bottom:5px !important;
            line-height:${1.5} !important;
            letter-spacing:${0.3}px !important;
          }
          p strong {
            padding-left: 0px !important;
          }
          iframe:{
            width: 100%;
            height: auto;
            margin-bottom: ${paddingHorizontal / 1.5};
          }
        `}
        files={[
          {
            href: 'cssfileaddress',
            type: 'text/css',
            rel: 'stylesheet',
          },
        ]}
        originWhitelist={['*']}
        source={{
          html: `<html><head><link href="https://fonts.googleapis.com/css?family=Battambang&display=swap" rel="stylesheet">
                                          <meta name="viewport" , initial-scale=1.0"></head><body>
                                          ${description}
                                          </body></html>`,
        }}
        viewportContent={
          'width=device-width, initial-scale=1.0, user-scalable=no'
        }
        // onLoadStart={() => dispatch(handleRefreshing(true))}
        // onLoadEnd={() => dispatch(handleRefreshing(false))}
      />
    </>
  );
};

export default React.memo(WebViewAutoHeight);
