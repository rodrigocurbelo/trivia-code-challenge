import React, { ReactNode } from 'react'

import styles from './styles'
import ButtonText from '../../texts/ButtonText'
import { TouchableOpacity } from 'react-native'

interface Props {
  children: ReactNode
}

export default function StartButton({ children }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ButtonText>{children}</ButtonText>
    </TouchableOpacity>
  )
}
