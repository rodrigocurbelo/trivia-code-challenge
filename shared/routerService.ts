import React from 'react'
import { NavigationContainerRef, CommonActions } from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef>()

export function navigate(name: string, params?: any) {
  navigationRef.current?.resetRoot()
  navigationRef.current?.navigate(name, params)
}
