import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet, ms, mvs, vs} from 'react-native-size-matters';
import {fontNames, imagePath} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {CreateTaskForm} from '../components';

const CreateTaskScreen = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      <View style={{height: vs(16)}} />
      <TouchableRipple onPress={navigation.goBack}>
        <MaterialIcons
          name="arrow-back"
          color={theme.colors.primary}
          size={ms(25)}
        />
      </TouchableRipple>
      <View style={{height: mvs(16)}} />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Text style={{...styles.heading, color: theme.colors.primary}}>
          {t('createANewSchedule')}
        </Text>
        <View style={{height: mvs(32)}} />
        <FastImage
          source={imagePath.ponyImage}
          style={styles.ponyImage}
          resizeMode="contain"
        />
        <View style={{height: vs(32)}} />
        <CreateTaskForm />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateTaskScreen;

const styles = ScaledSheet.create({
  container: {flex: 1, paddingHorizontal: '16@msr'},
  heading: {
    fontFamily: fontNames.family2_medium,
    fontSize: '20@msr',
    textAlign: 'center',
  },
  ponyImage: {
    height: '120@sr',
  },
  subHeading: {fontFamily: fontNames.family2_medium, fontSize: '20@msr'},
});
