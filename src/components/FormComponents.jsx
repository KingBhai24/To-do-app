import React, {useState} from 'react';
import {
  Button,
  HelperText,
  List,
  TextInput,
  useTheme,
} from 'react-native-paper';
import {fontNames, priorityLevels} from '../constants';
import {ScaledSheet} from 'react-native-size-matters';

export const ErrorField = ({title}) => {
  return <HelperText type="error">{title}</HelperText>;
};

export const TitleField = ({text, setText, onBlur, error, editable}) => {
  return (
    <TextInput
      mode="outlined"
      placeholder="Go Jogging"
      value={text}
      onChangeText={setText}
      onBlur={onBlur}
      error={error}
      editable={editable}
      autoComplete="off"
      autoCapitalize="words"
      autoCorrect={true}
      autoFocus={false}
      keyboardType="default"
      maxLength={50}
    />
  );
};

export const PriorityList = ({selectedItem, handleSelect}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const getPriorityColor = () => {
    switch (selectedItem) {
      case priorityLevels.high:
        return theme.colors.priority.high;

      case priorityLevels.medium:
        return theme.colors.priority.medium;

      case priorityLevels.low:
        return theme.colors.priority.low;

      default:
        return '#000000';
    }
  };

  return (
    <List.Accordion
      title={selectedItem || 'Select Priority'}
      onPress={() => setExpanded(p => !p)}
      expanded={expanded}
      titleStyle={{
        ...styles.listHeader,
        color: getPriorityColor(),
        backgroundColor: theme.colors.priority.background,
      }}>
      <List.Item
        title={priorityLevels.high}
        titleStyle={styles.listItem}
        onPress={t => {
          setExpanded(false);
          handleSelect(priorityLevels.high);
        }}
      />
      <List.Item
        title={priorityLevels.medium}
        titleStyle={styles.listItem}
        onPress={() => {
          setExpanded(false);
          handleSelect(priorityLevels.medium);
        }}
      />
      <List.Item
        title={priorityLevels.low}
        titleStyle={styles.listItem}
        onPress={() => {
          setExpanded(false);
          handleSelect(priorityLevels.low);
        }}
      />
    </List.Accordion>
  );
};

export const SubmitButton = ({title, handlePress, loading, disabled}) => {
  return (
    <Button
      mode="contained"
      onPress={handlePress}
      loading={loading}
      disabled={disabled}>
      {title}
    </Button>
  );
};

const styles = ScaledSheet.create({
  listHeader: {
    borderRadius: '8@msr',
    alignSelf: 'flex-start',
    paddingVertical: '4@msr',
    width: '180@msr',
    textAlign: 'center',
    elevation: 2,
  },
  listItem: {
    fontFamily: fontNames.family2_medium,
    fontSize: '14@msr',
  },
});
