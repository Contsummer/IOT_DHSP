import { View, Text } from 'react-native'
import React from 'react'

const Breadcumb = ({classType, type}) => {
  return (
    <View className='flex-row justify-between'>
      <View>
        <Text className="text-gray-300 text-lg">Khối: <Text className='text-black font-semibold'>{classType}  &gt;</Text>
        </Text>
      </View>

      <View>
        <Text className="text-gray-300 text-lg">Sắp xếp: <Text className='text-black font-semibold'>{type}  &gt;</Text></Text>
      </View>
    </View>
  )
}

export default Breadcumb