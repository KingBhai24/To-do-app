import React from 'react';
import {View} from 'react-native';
import {
  Checkbox,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {ScaledSheet, ms, mvs, s} from 'react-native-size-matters';
import {fontNames, priorityLevels} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {removeTask, updateTaskCompleted} from '../redux/reducers/taskListSlice';
import Toast from 'react-native-simple-toast';

const SingleTask = ({modifiedDate, date, title, priority, completed}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const getPriorityColor = () => {
    switch (priority) {
      case priorityLevels.high:
        return theme.colors.priority.high;

      case priorityLevels.medium:
        return theme.colors.priority.medium;

      case priorityLevels.low:
        return theme.colors.priority.low;

      default:
        return theme.colors.priority.low;
    }
  };

  return (
    <Surface
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <View style={{height: mvs(8)}} />
        <Surface
          style={{
            ...styles.priorityContainer,
            backgroundColor: theme.colors.priority.background,
          }}>
          <Text style={{...styles.priorityText, color: getPriorityColor()}}>
            {priority}
          </Text>
        </Surface>
      </View>
      <View style={{width: s(8)}} />
      <View style={styles.iconContainer}>
        <Checkbox
          status={completed ? 'checked' : 'unchecked'}
          onPress={() => {
            dispatch(
              updateTaskCompleted({modifiedDate, date, completed: !completed}),
            );
            Toast.show('Task status updated successfully!');
          }}
        />
        <TouchableRipple
          onPress={() => {
            dispatch(removeTask({modifiedDate, date}));
            Toast.show('Task deleted successfully!');
          }}>
          <AntDesign name="delete" color={theme.colors.primary} size={ms(24)} />
        </TouchableRipple>
      </View>
    </Surface>
  );
};

export default SingleTask;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '8@msr',
    paddingHorizontal: '16@msr',
    paddingVertical: '8@msr',
  },
  title: {
    fontFamily: fontNames.family2_regular,
    fontSize: '16@msr',
  },
  priorityContainer: {
    borderRadius: '8@msr',
    alignItems: 'center',
    paddingVertical: '4@msr',
    width: '120@msr',
  },
  priorityText: {fontFamily: fontNames.family2_semiBold, fontSize: '14@msr'},
  iconContainer: {flexDirection: 'row', alignItems: 'center'},
});
