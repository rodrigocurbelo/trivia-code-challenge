import React, { ComponentType } from 'react'
import { NavigationProps } from './types/Navigation'

// HOC to ensure that going back is not possible.
export default function preventGoingBack(Component: ComponentType<any>) {
  return (props: NavigationProps) => {
    props.navigation.addListener('beforeRemove', (e) => {
      // However, you can navigate back.
      if (e.data.action.type !== 'NAVIGATE') {
        e.preventDefault()
      }
    })

    return <Component {...props} />
  }
}
