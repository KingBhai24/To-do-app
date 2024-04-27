import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {fontNames, priorityLevels} from '../constants';
import {useTranslation} from 'react-i18next';
import {
  ErrorField,
  PriorityList,
  SubmitButton,
  TitleField,
} from './FormComponents';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/reducers/taskListSlice';
import {useNavigation} from '@react-navigation/native';
import {getModifiedDate} from '../utils';
import Toast from 'react-native-simple-toast';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Please enter task title.'),
  priority: Yup.string().oneOf(
    [priorityLevels.high, priorityLevels.medium, priorityLevels.low],
    'Please Select Priority.',
  ),
});

const CreateTaskForm = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting, submitCount, isValid},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {title: '', priority: 'Select Priority'},
  });

  const handleSaveTask = async data => {
    const currentDate = new Date();
    dispatch(
      addTask({
        modifiedDate: getModifiedDate(currentDate),
        date: currentDate.toISOString(),
        title: data.title,
        priority: data.priority,
        completed: false,
      }),
    );
    Toast.show('Task added successfully!');
    navigation.goBack();
  };

  return (
    <>
      <Text style={styles.subHeading}>{t('title')}</Text>
      <View style={{height: vs(8)}} />
      <Controller
        name="title"
        control={control}
        render={({field: {value, onChange, onBlur}, fieldState: {invalid}}) => {
          return (
            <TitleField
              text={value}
              setText={onChange}
              onBlur={onBlur}
              error={invalid}
              editable={true}
            />
          );
        }}
      />
      {errors.title && <ErrorField title={errors.title.message} />}

      <View style={{height: vs(32)}} />
      <Text style={styles.subHeading}>{t('priority')}</Text>
      <View style={{height: vs(4)}} />
      <Controller
        name="priority"
        control={control}
        render={({field: {value, onChange}}) => {
          return <PriorityList selectedItem={value} handleSelect={onChange} />;
        }}
      />
      {errors.priority && <ErrorField title={errors.priority.message} />}

      <View style={{height: vs(32)}} />
      <SubmitButton
        title={t('save')}
        handlePress={handleSubmit(handleSaveTask)}
        loading={isSubmitting}
        disabled={(submitCount > 0 && !isValid) || isSubmitting}
      />
      <View style={{height: vs(16)}} />
    </>
  );
};

export default CreateTaskForm;

const styles = ScaledSheet.create({
  container: {flex: 1, paddingHorizontal: '16@msr'},
  heading: {fontFamily: fontNames.family2_medium, fontSize: '20@msr'},
  ponyImage: {
    height: '120@sr',
  },
  subHeading: {fontFamily: fontNames.family2_medium, fontSize: '20@msr'},
});
