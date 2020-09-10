import React from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef>()

navigationRef.current?.addListener('beforeRemove', (e) => {
  alert('hello')
  e.preventDefault()
})

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params)
}
