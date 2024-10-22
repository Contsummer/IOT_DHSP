import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import icons from '../constants/icons'
import { router } from 'expo-router'



const Profile = ({source, name}) => {
    

  return (
    <View className='flex-row justify-between h-[100px] items-center px-2'>
        <View className='flex-row items-center justify-start '>
            <TouchableOpacity onPress={() => {
                router.push('/profile_detail')
            }}>
                <Image source={source} resizeMode='contain' className='w-10 h-10' />
            </TouchableOpacity>
            <Text className='ml-5 text-3xl font-semibold'>Chào {name}</Text>
        </View>
     
      <TouchableOpacity>
        <Image source={icons.message} className='w-6 h-6' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

export default Profile