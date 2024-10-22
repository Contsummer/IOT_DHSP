import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Profile from '../../components/profile'
import image from '../../constants/image'


const Home = () => {
  return (
    <SafeAreaView className='w-full h-full'>
        <StatusBar style='dark' backgroundColor='white'/>
        <View className="w-full h-full bg-white">
            <Profile name={'An Châu'} source={image.profile} className='h-10 w-full'/>
        </View>
    </SafeAreaView>
  )
}

export default Home