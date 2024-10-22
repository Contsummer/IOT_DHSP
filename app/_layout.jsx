import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        <Stack.Screen name='(profile)'/>
        <Stack.Screen name='(experiment)' options={{headerShown: false}}/>
        <Stack.Screen name='+not-found' options={{title: 'Oops! Not Found'}}/>
    </Stack>
  )
}

export default RootLayout