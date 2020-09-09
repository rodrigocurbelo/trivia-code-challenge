import React, { ReactNode } from 'react'
import { Text as RNText } from 'react-native'

import styles from './styles'

interface Props {
  children: ReactNode
}

export default function ButtonText({ children }: Props) {
  return <RNText style={styles.text}>{children}</RNText>
}
