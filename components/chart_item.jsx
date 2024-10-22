import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Chart_item = () => {
  return (
    <View className='h-[45%]' style={style.shadow}>
      <Text className='text-xl' style={{color: '#B8B8B8', textAlign: 'center'}}>Đồ thị</Text>
      {/* chart */}
      <View>
      
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    shadow: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      width: '95%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 10, 
    }
  })
  

export default Chart_item
