import React, { ComponentType } from 'react'
import { NavigationProps } from './types/Navigation'

export default function preventGoingBack(Component: ComponentType<any>) {
  return (props: NavigationProps) => {
    props.navigation.addListener('beforeRemove', (e) => {
      e.preventDefault()
    })

    return <Component {...props} />
  }
}
