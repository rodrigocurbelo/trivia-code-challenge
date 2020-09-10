import React, { ReactNode } from 'react'
import { Text as RNText } from 'react-native'

import styles from './styles'

interface Props {
  bold?: boolean
  center?: boolean
  children: ReactNode
}

export default function Body({ bold, center, children }: Props) {
  return (
    <RNText style={[styles.text, bold && styles.bold, center && styles.center]}>
      {children}
    </RNText>
  )
}
