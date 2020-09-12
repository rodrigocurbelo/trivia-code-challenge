import React, { ReactNode } from 'react'

import styles from './styles'
import ButtonText from '../../texts/ButtonText'
import { TouchableOpacity } from 'react-native'

interface Props {
  onPress: () => void
  children: ReactNode
  disabled?: boolean
}

export default function PlayAgainButton({
  children,
  disabled,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <ButtonText>{children}</ButtonText>
    </TouchableOpacity>
  )
}
