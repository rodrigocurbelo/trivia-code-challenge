// TODO: use: import { StackNavigationProp } from '@react-navigation/stack';
// see: https://github.com/react-navigation/react-navigation/issues/8399
// For timing reasons, I'm using this hackish implementation for the time being.

import { Routes } from '../enums/routes'

export interface NavigationProps {
  navigation: {
    goBack: () => void
    navigate: (route: Routes) => void
  }
  route: {
    params: any
  }
}
