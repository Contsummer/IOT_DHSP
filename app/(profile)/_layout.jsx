import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='profile_detail' options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout