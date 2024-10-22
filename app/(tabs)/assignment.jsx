import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const assignment = () => {
  return (
    <SafeAreaView className='w-full h-full'>
        <StatusBar style='dark' backgroundColor='white'/>
        <View className="w-full h-full bg-white">
        
        </View>
    </SafeAreaView>
  )
}

export default assignment