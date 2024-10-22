import { View, Text } from 'react-native'
import React from 'react'

const Table = () => {
  return (
    <View className='w-full h-full items-center justify-center bg-white'>
    <View className='h-[95%] items-center justify-center py-5 rounded-2xl' style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '95%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10, 
    }}>
      <Text className='text-2xl text-black font-medium'>Table</Text>
    </View>
  </View>
  )
}

export default Table