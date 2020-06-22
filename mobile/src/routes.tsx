import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { HomeScreen } from './screens/Home'
import { DetailsScreen } from './screens/Details'

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

const HomeNavigator = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      cardStyle: {
        backgroundColor: '#f0f0f5'
      }
    }}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
)
