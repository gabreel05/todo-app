import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Divider, Layout, TopNavigation, Toggle } from '@ui-kitten/components'
import { StackNavigationProp } from '@react-navigation/stack'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { ThemeContext } from '../../contexts/theme'

type RootStackParamList = {
  Details: undefined;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: Props) => {
  const navigationDetails = () => {
    navigation.navigate('Details')
  }

  const themeContext = useContext(ThemeContext)

  const [checked, setChecked] = React.useState(false)

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked)

    themeContext.toggleTheme()
  }

  const ToggleThemeButton = () => (
    <Toggle checked={checked} onChange={onCheckedChange} />
  )

  return (
    <SafeAreaView style={{ marginTop: getStatusBarHeight(), flex: 1 }}>
      <TopNavigation title="TodoApp" alignment="center" accessoryRight={ToggleThemeButton} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Button style={{ marginVertical: 4 }} onPress={navigationDetails}>Open Details</Button>
      </Layout>
    </SafeAreaView>
  )
}
