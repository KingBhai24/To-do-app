import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontNames, navigationRoutes} from '../constants';
import {useTranslation} from 'react-i18next';
import {ScaledSheet, mvs} from 'react-native-size-matters';
import {useTheme, FAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AllDaysTaskList} from '../components';

const HomeScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      <View style={{height: mvs(24)}} />
      <Text style={{...styles.heading, color: theme.colors.primary}}>
        {t('note')}
      </Text>
      <View style={{height: mvs(20)}} />
      <AllDaysTaskList />
      <FAB
        style={{
          ...styles.fab,
          backgroundColor: theme.colors.primary,
        }}
        color={theme.colors.background}
        icon="plus"
        onPress={() => navigation.navigate(navigationRoutes.CreateTaskScreen)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {flex: 1, paddingHorizontal: '16@msr'},
  heading: {
    fontFamily: fontNames.family1_semiBold,
    fontSize: '24@msr',
  },
  fab: {
    position: 'absolute',
    right: '16@msr',
    bottom: '16@msr',
  },
});
