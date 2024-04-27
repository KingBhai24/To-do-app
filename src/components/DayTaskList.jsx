import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import SingleTask from './SingleTask';
import {ScaledSheet, mvs} from 'react-native-size-matters';
import {fontNames} from '../constants';

const DayTaskList = ({modifiedDate, taskList}) => {
  const theme = useTheme();

  return (
    <>
      <Text style={{...styles.date, color: theme.colors.text.accent1}}>
        {modifiedDate}
      </Text>
      <View style={{height: mvs(8)}} />
      {taskList.map((it, i) => (
        <View key={i}>
          <SingleTask
            modifiedDate={modifiedDate}
            date={it.date}
            title={it.title}
            priority={it.priority}
            completed={it.completed}
          />
          <View style={{height: mvs(8)}} />
        </View>
      ))}
    </>
  );
};

export default DayTaskList;

const styles = ScaledSheet.create({
  date: {fontFamily: fontNames.family2_medium, fontSize: '16@msr'},
});
