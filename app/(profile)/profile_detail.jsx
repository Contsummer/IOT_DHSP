import { View, Text, Image } from 'react-native'
import React from 'react'
import image from '../../constants/image'
import { Button } from 'react-native'
import { router } from 'expo-router'

const Profile = () => {
  return (
    <View className='w-full h-full items-center pt-10'>    
        <Image source={image.profile} resizeMode='contain' className='w-[200px] h-[200px]'/>
        <Text className='my-10 text-2xl font-semibold'>Châu Nguyễn Trường An</Text>
        <Text className='text-gray-500 font-semibold mb-10'>dh52110526@student.stu.edu.vn</Text>
        <Button title='Back' onPress={() => {
          router.push('/home');
        }} />
    </View>
  )
}

export default Profile