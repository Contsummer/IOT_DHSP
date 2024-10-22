import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { router, useRouter } from 'expo-router'

const Lesson = ({number, name, avtInstructor,instructor, time}) => {
  return (
    <View className='mx-5 my-2 rounded-3xl py-5 px-10' style={{backgroundColor: '#f0f4ff'}}>
{/* title */}
        <View className='flex-row justify-between items-center'> 

            <View className='justify-center items-center bg-white p-2 rounded-xl'>
                <Text className='text-xl font-semibold'>Bài {number}</Text>
            </View>

            <View className='justify-center items-center bg-blue-600 p-2 rounded-xl'>

                <TouchableOpacity className='' onPress={() => {
                    router.push({
                        params: {id: number},
                        pathname: '/lesson'
                    });
                }}>       
                    <Text className='text-white text-xl font-semibold'>Tham gia</Text>
                </TouchableOpacity>

            </View>
        </View>

{/* Content */}
        <View className='my-5'>
            <Text className='text-xl font-semibold mb-1' >{name}</Text>
            <Text className='text-gray-400'>{time}</Text>
        </View>
{/* Instructor */}
        <View className='flex-row items-center'>
            <Image source={avtInstructor} resizeMode='contain' className='w-10 h-10'/>
            <Text className='ml-5 font-semibold text-lg'>{instructor}</Text>
        </View>
    </View>
  )
}

export default Lesson