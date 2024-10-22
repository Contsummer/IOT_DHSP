import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import icons from '../../constants/icons'


const TabIcon = ({ icon, color, name, focused }) => {
    return (
            <View className={`mr-2`}>
                <View className={`${focused ? 'bg-black rounded-3xl' : ''} ' items-center flex-row px-2 h-10`}>
                    <Image source={icon} resizeMode='contain' tintColor={color} />
                    <Text className={`${focused ? 'font-bold text-white ml-[10px]' : 'font-normal'} text-xs`}>
                        {focused ? name : ''}
                    </Text>
                </View>
            </View>
    )
}


const TabsLayout = () => {
  return (
    <>
        <Tabs screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#b1b1b1',
            tabBarStyle:{
                backgroundColor: '#faf3e7',
                height: 70,
                marginBottom: 10,
            }
        }}>

          <Tabs.Screen 
            name="home"
            options={{
                title: 'Trang chủ',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon={icons.home}
                        color={color}
                        focused={focused}
                        name="Trang chủ"
                    />
                )
            }}
          />

              <Tabs.Screen
            name='group'
            options={{
                title: 'Nhóm',
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon={icons.group}
                        color={color}
                        focused={focused}
                        name='Nhóm'
                    />
                )
            }}
            />

            <Tabs.Screen
                name="assignment"
                options={{
                    title: 'Bài tập',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.assignment}
                            color={color}
                            focused={focused}
                            name="Bài tập"
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="experiment"
                options={{
                    title: 'Bài thực hành',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.experiment}
                            color={color}
                            focused={focused}
                            name="Bài thực hành"
                        />
                    )
                }}
            />

        </Tabs>
    </>
  )
}

export default TabsLayout