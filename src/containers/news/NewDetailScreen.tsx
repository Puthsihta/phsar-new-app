import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useStatusBar} from '../../utils';
import colors from '../../themes/colors';
import {size} from '../../themes/fonts';
import {paddingHorizontal, widthRespone} from '../../themes/layout';
import {HStack} from 'native-base';
import {Label, LabelBold} from '../../components/customs/Label';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BaseComponent from '../../components/customs/BaseComponent';
import style from '../../styles';
import NewDetail from '../../screens/news/NewDetail';

const data = {
  id: 63,
  user_id: 1,
  title:
    'នគរបាលខេត្ដព្រៃវែង កំណត់មុខសញ្ញាឃាត់ខ្លួនក្រុមក្មេងទំនើងបង្កអសន្តិសុខ ជិតផ្សារ កអណ្តើក',
  image: '/Untitled-1-3a84309d-bb40-4330-917a-6ea815bdf3a7.jpg',
  link_type: null,
  link: null,
  des: '<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r x126k92a">\r\n<div dir="auto"><iframe style="border: none; overflow: hidden; height: 240px;" src="https://www.facebook.com/plugins/video.php?height=314&amp;href=https%3A%2F%2Fwww.facebook.com%2FPolice.PV%2Fvideos%2F148548891163124%2F&amp;show_text=false&amp;width=560&amp;t=0" width="630" height="353" frameborder="0" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe></div>\r\n<div dir="auto">ខេត្តព្រៃវែង៖ កាលពីថ្ងៃទី១៦ ខែមីនា ឆ្នាំ ២០២៣ វេលាម៉ោង ១០:០០នាទីព្រឹក អធិការដ្ឋាននគរបាលស្រុកកំពង់ត្របែក បានទទួលព័ត៌មានបឋម ពីគណនី Facebook ឈ្មោះ Sona.sim ដោយបង្ហោះសារថា នៅចំណុចខាងកើតផ្សារ កអណ្ដើក មានក្រុមក្មេងស្ទាវ គប់កញ្ចក់រថយន្តនៅវេលាយប់ម៉ោងប្រហែល ៩:៣៥ នាទី ថ្ងៃទី១៥ ខែមីនា ឆ្នាំ២០២៣ ។</div>\r\n</div>\r\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\r\n<div dir="auto"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-17_13-42-53-1ea5797d-5fdc-47ac-b7ab-212258ee4f1c.jpg"></div>\r\n<div dir="auto">អនុវត្តតាមបទបញ្ជារបស់ លោកឧត្តមសេនីយ៍ទោ ឈឿន ប៊ុនឆន ស្នងការ នៃស្នងការដ្ឋាននគរបាលខេត្តព្រៃវែង និងដោយមានការណែនាំចង្អុលបង្ហាញពីលោកឧត្តមសេនីយ៍ត្រី ពៅ ជីវី ស្នងការរងទទួលផែនការងារនគរបាលព្រហ្មទណ្ឌ បានបញ្ជាចាត់តាំង លោកវរសេនីយ៍ទោ ឡុង សុផាត នាយការិយាល័យព្រហ្មទណ្ឌកម្រិតស្រាល ចេញបេសកកម្មដឹកនាំកម្លាំងជំនាញចុះមកសហការជាមួយលោកអធិការ អធិការរងជំនាញព្រហ្មទណ្ឌ នាយផ្នែក និងនាយប៉ុស្តិ៍នគរបាលរដ្ឋបាលប្រាសាទ ស្រាវជ្រាវដល់កន្លែងកើតហេតុ ទទួលបានលទ្ធផលដូចខាងក្រោម៖</div>\r\n</div>\r\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\r\n<div dir="auto">នៅថ្ងៃទី១៥ ខែមីនា ឆ្នាំ ២០២៣ វេលាម៉ោងប្រហែល ២១:៣៥នាទីយប់ មានរថយន្តកុងតឺន័រ មួយគ្រឿង ពាក់ផ្លាកលេខ ស្វ-រ 3A-3097 បើកបរដោយឈ្មោះ ស៊ឹម សូណា ភេទប្រុស អាយុ ៣៩ឆ្នាំ នៅភូមិអំពិលធំ ឃុំខ្វិតធំ ស្រុកព្រៃឈរខេត្តកំពង់ចាម បើកបរមកពីទិសខាងកើត ។ លុះមកដល់ចំណុចគីឡូម៉ែត្រលេខ ៩៨ ក្នុងភូមិផ្កូវ ឃុំប្រាសាទ ស្រុកកំពង់ត្របែក ខេត្តព្រៃវែង ក៏បានឃើញក្រុមជនមិនស្គាល់ឈ្មោះចំនួន ៣នាក់ ជិះម៉ូតូមួយគ្រឿង (មិនស្គាល់ម៉ាក) បញ្ច្រាសគ្នាមកពីទិសខាងលិច ហើយក៏បានធ្វើសកម្មភាពគប់ទៅលើកញ្ចក់រថយន្ត បណ្ដាលឱ្យប្រេះស្រាំកញ្ចក់រថយន្តផ្នែកខាងមុខ ។</div>\r\n</div>\r\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\r\n<div dir="auto"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-17_13-35-36-8061a7a6-358a-4367-b9b6-a327e86c0b40.jpg"></div>\r\n<div dir="auto">តាមការស្រាវជ្រាវជុំវិញកន្លែងកើតហេតុ ក្រុមមន្ត្រីជំនាញបានកំណត់មុខសញ្ញាសង្ស័យចំនួន ៣នាក់ និងឈានទៅធ្វើការឃាត់ខ្លួនជនសង្ស័យដូចខាងក្រោម៖</div>\r\n</div>\r\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\r\n<div dir="auto">១. ឈ្មោះ ថៃ មេសា ភេទប្រុស អាយុ ១៨ឆ្នាំ រស់នៅភូមិស្វាយចេក ឃុំព្រៃឈរ ស្រុកកំពង់ត្របែក ខេត្តព្រៃវែង ។ ២. ឈ្មោះ វ៉ា ស៊ីថេត ភេទប្រុស អាយុ ១៧ឆ្នាំ រស់នៅភូមិស្វាយចេក ឃុំព្រៃឈរ ស្រុកកំពង់ត្របែក ខេត្តព្រៃវែង ។ ៣. ឈ្មោះ ឆោម សុភីត ភេទប្រុស អាយុ ១៨ឆ្នាំ រស់នៅភូមិព្រៃតាណេន ឃុំព្រៃឈរ ស្រុកកំពង់ត្របែក ខេត្តព្រៃវែង ។</div>\r\n</div>\r\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\r\n<div dir="auto">&nbsp;</div>\r\n<div dir="auto">ក្រោយពីសមត្ថកិច្ចសាកសួរ ជនសង្ស័យទាំងបីបានឆ្លើយសារភាពថា ក្រុមខ្លួនពិតជាបានធ្វើសកម្មភាពគប់កញ្ចក់រថយន្តកុងតឺន័រ នៅចំណុចខាងលើពិតប្រាកដមែន ដោយជនសង្ស័យឈ្មោះ ថៃ មេសា ជាអ្នកឌុប ហើយឈ្មោះ វ៉ា ស៊ីថេត ជិះកណ្តាល គឺជាអ្នកគប់ និងឈ្មោះ ឆោម សុភីត ជិះពីក្រោយ ។</div>\r\n</div>\r\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\r\n<div dir="auto">&nbsp;</div>\r\n<div dir="auto">បច្ចុប្បន្ន ជនសង្ស័យទាំង ៣នាក់ ត្រូវបានឃាត់ខ្លួននៅអធិការដ្ឋាន ដើម្បីក៏សាងសំណុំរឿងតាមនិតិវិធី ៕</div>\r\n<div dir="auto"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-16_21-22-21-5ceb20b9-aa3b-4e2b-a8fa-391e44d25f53.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-16_21-22-02-6bf33980-a7ca-4302-9239-9911e5950b9c.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-16_21-21-36-777d200e-4072-4278-ae91-7e5364013a06.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-17_11-22-54-bcc2a9a4-4902-4501-8b2d-ad4d94c8686f.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-17_11-23-18-4d1a2d8a-8efa-4c8e-baa7-5a6069c71539.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/photo_2023-03-17_11-23-23-d093786f-3b29-4f4c-9c8d-0dfd6a03d99b.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/336550609_225506850006522_3080998531115814679_n-ff31cb3a-a338-48f5-97b3-add071cec6ce.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/335682505_3091385951006555_5878922277607021372_n-44e948a5-0b83-43e8-a32d-7bfb3ba13e42.jpg"><img style="width: 100%;" src="https://sccpvp.phsartech.com/file_manager/336000626_1173933943284469_7677717089538454240_n-463df96e-98da-4f6b-a7d3-5f74e52b2bd3.jpg"></div>\r\n<div dir="auto">&nbsp;</div>\r\n</div>',
  status: 1,
  post_date: '2023-03-17 00:00:00',
  video: null,
  video_type: null,
  created_at: '2023-03-18T01:23:00.000000Z',
  image_url:
    'https://sccpvp.phsartech.com/file_manager/Untitled-1-3a84309d-bb40-4330-917a-6ea815bdf3a7.jpg',
};

const NewDetailScreen = (props: any) => {
  useStatusBar('light-content', colors.baseColor);
  const {id} = props.route.params;
  const [fontSize, setFontSize] = useState(size.font22);

  const onShare = async () => {
    // dispatch(spinningLoading(true));
    // try {
    //   const url = await buildShortLink(data?.data?.data);
    //   await Share.share({
    //     message: url,
    //   });
    // } catch (error) {
    //   console.log('error===', error);
    // }
    // dispatch(spinningLoading(false));
  };

  const onIncreaseFont = () => {
    if (fontSize >= size.font26) {
      return;
    }
    setFontSize(fontSize + 2);
  };

  const onDecreaseFont = () => {
    if (fontSize <= size.font18) {
      return;
    }
    setFontSize(fontSize - 2);
  };

  const rightIcon = () => {
    return (
      <View style={{marginTop: paddingHorizontal / 4}}>
        <HStack>
          <TouchableOpacity
            disabled={fontSize <= size.font18}
            onPress={onDecreaseFont}>
            <Label
              style={[
                {
                  color:
                    fontSize <= size.font18
                      ? colors.descriptionColor
                      : colors.whiteColor,
                },
              ]}>
              ក-
            </Label>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={fontSize >= size.font26}
            onPress={onIncreaseFont}
            style={{marginHorizontal: paddingHorizontal}}>
            <LabelBold
              style={[
                {
                  color:
                    fontSize >= size.font26
                      ? colors.descriptionColor
                      : colors.whiteColor,
                },
              ]}>
              ក+
            </LabelBold>
          </TouchableOpacity>
          <Ionicons
            style={{marginRight: paddingHorizontal * 7}}
            onPress={onShare}
            name="share-outline"
            size={widthRespone(7)}
            color={colors.whiteColor}
          />
        </HStack>
      </View>
    );
  };

  return (
    <BaseComponent
      title="new_detail"
      is_title_center={false}
      rightIcon={rightIcon()}>
      <View style={style.flexContainer}>
        <NewDetail fontSize={fontSize} data={data} />
      </View>
    </BaseComponent>
  );
};

export default NewDetailScreen;

const styles = StyleSheet.create({});
