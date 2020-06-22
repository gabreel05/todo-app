import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { Divider, Layout, TopNavigation, TopNavigationAction, Icon, Text, Toggle } from '@ui-kitten/components'
import { StackNavigationProp } from '@react-navigation/stack'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { ThemeContext } from '../../contexts/theme'

type RootStackParamList = {
  Home: undefined;
}

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
)

export const DetailsScreen = ({ navigation }: Props) => {
  const navigationBack = () => {
    navigation.goBack()
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

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigationBack} />
  )

  return (
    <SafeAreaView style={{ marginTop: getStatusBarHeight(), flex: 1 }}>
      <TopNavigation
        title="TodoApp"
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={ToggleThemeButton}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">Details</Text>
      </Layout>
    </SafeAreaView>
  )
}
