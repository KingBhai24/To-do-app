import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';
import {ms, mvs, vs} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import DayTaskList from './DayTaskList';
import {fontNames} from '../constants';
import {selectTaskList} from '../redux/reducers/taskListSlice';

const AllDaysTaskList = () => {
  const taskList = useSelector(selectTaskList);
  const {t} = useTranslation();

  if (!taskList || !taskList.length) {
    return (
      <View
        style={{
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: fontNames.family1_regular, fontSize: ms(20)}}>
          {t('noTasks')}
        </Text>
      </View>
    );
  }

  return (
    <>
      <Text style={{fontFamily: fontNames.family2_regular, fontSize: ms(20)}}>
        {t('thisWeek')}
      </Text>
      <View style={{height: mvs(16)}} />
      <FlashList
        showsVerticalScrollIndicator={false}
        data={taskList}
        estimatedItemSize={100}
        renderItem={({item}) => (
          <View style={{paddingHorizontal: ms(2)}}>
            <DayTaskList
              modifiedDate={item.modifiedDate}
              taskList={item.taskList}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{height: vs(16)}} />}
        ListFooterComponent={<View style={{height: vs(100)}} />}
      />
    </>
  );
};

export default AllDaysTaskList;
