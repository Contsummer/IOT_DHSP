import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Chart_item from './chart_item'



const Chart = () => {
  return (
    <View className='w-full h-full items-center bg-white py-5'>
      <Chart_item/>
    </View>
  )
}



export default Chart