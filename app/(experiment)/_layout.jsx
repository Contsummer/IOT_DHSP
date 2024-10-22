import React from 'react'
import { Stack } from 'expo-router'

const ExperimentRootlayout = () => {
  return (
    <Stack>
        <Stack.Screen name='lesson' options={{headerShown: false}}/>
    </Stack>
  )
}

export default ExperimentRootlayout