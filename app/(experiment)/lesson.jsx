import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Config from '../../components/config';
import Chart from '../../components/chart';
import Table from '../../components/table';
import Data from '../../components/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import icons from '../../constants/icons';

const Tab = createMaterialTopTabNavigator();

const ConfigScreen = () => {
  return (
    <Config />
  );
};

const ChartScreen = () => {
  return (
    <Chart/>
  );
};

const TableScreen = () => {
  return (
    <Table />
  )
}

const DataScreen = () => {
  return (
    <Data />
  )
}

const Experiment = () => {

  const {id} = useLocalSearchParams();

  return (
    <SafeAreaView className='h-full w-full bg-white'>
      <View>

        <View className='h-[5vh] flex-row items-center justify-between mx-5 mt-2'>
          <TouchableOpacity onPress={ () => {
            router.push('/experiment')
          }}>
            <Text className='text-3xl font-semibold'>&lt;</Text>
          </TouchableOpacity>
          <Text className='text-3xl font-bold'>Bài {id}</Text>
          <TouchableOpacity onPress={()=>{console.log()}}>
            <Image source={icons.message} className='w-6 h-6' resizeMode='contain' />
          </TouchableOpacity>
        </View>

        <View className='h-[90vh] mx-3'>  
          <Tab.Navigator screenOptions={{tabBarItemStyle:{minWidth: 150}, tabBarScrollEnabled: true}}>
            <Tab.Screen name="Thí nghiệm" component={ConfigScreen} options={{tabBarStyle: {backgroundColor: '#FFFFFF'}}}/>
            <Tab.Screen name="Đồ thị" component={ChartScreen} />
            <Tab.Screen name='Bảng' component={TableScreen} />
            <Tab.Screen name='Dữ liệu' component={DataScreen} />
          </Tab.Navigator>
        </View>
      </View>
    </SafeAreaView>
   
  );
};

export default Experiment;
