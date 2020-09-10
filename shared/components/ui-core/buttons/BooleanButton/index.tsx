import React, { ReactNode } from 'react'

import styles from './styles'
import ButtonText from '../../texts/ButtonText'
import { TouchableOpacity } from 'react-native'

interface Props {
  children: ReactNode
  onPress: () => void
}

export default function BooleanButton({ children, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ButtonText>{children}</ButtonText>
    </TouchableOpacity>
  )
}
