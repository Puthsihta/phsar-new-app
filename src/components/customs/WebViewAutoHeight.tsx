import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import colors from '../../themes/colors';
import {paddingHorizontal} from '../../themes/layout';
interface data {
  description: string;
  fontSize: any;
}
const WebViewAutoHeight: React.FC<data> = ({description, fontSize}) => {
  const [loading, setLoading] = useState(true);
  const loadingComponent = () => (
    <ActivityIndicator
      color={colors.baseColor}
      size="large"
      style={{marginVertical: 20}}
    />
  );

  return (
    <>
      {/* {loading && loadingComponent()} */}
      <AutoHeightWebView
        dataDetectorTypes="none"
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        style={{
          width: '100%',
          minHeight: 1,
        }}
        customStyle={`
                              * {
                              font-family: 'Battambang' !important;
                              line-height:${1.5} !important;
                              letter-spacing:${0.3}px !important;
                              font-size:${fontSize}px !important;
                              color: ${colors.titleColor};
                              width: 100% !important;
                              object-fit : contain;
                          }
                          li{
                              color: ${colors.baseColor};
                              font-size:${17}px;
                          }
                          img {
                          width: 100%;
                          height: auto;
                          margin-top: ${paddingHorizontal / 1.5};
                          }
                          p{
                              margin-bottom:5px !important;
                              line-height:${1.5} !important;
                              letter-spacing:${0.3}px !important;
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
          baseUrl: '',
          html: `<html><head><link href="https://fonts.googleapis.com/css?family=Battambang&display=swap" rel="stylesheet">
                                          <meta name="viewport" , initial-scale=1.0"></head><body>
                                          ${description}
                                          </body></html>`,
        }}
        viewportContent={
          'width=device-width, initial-scale=1.0, user-scalable=no'
        }
        // onLoadStart={() => setLoading(true)}
        // onLoadEnd={() => setLoading(false)}
      />
    </>
  );
};

export default WebViewAutoHeight;
