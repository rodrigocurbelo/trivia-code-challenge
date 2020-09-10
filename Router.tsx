import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './modules/Home'
import Results from './modules/Results'
import MultipleOption from './modules/MultipleOption'
import { Routes } from './shared/enums/routes'
import { navigationRef } from './shared/routerService'

const Stack = createStackNavigator()

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal-inverted',
        }}
      >
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.MultipleOption} component={MultipleOption} />
        <Stack.Screen name={Routes.Results} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
