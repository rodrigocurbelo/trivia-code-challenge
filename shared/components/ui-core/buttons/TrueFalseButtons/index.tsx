import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import BooleanButton from '../BooleanButton'
import { BooleanOptionType } from '../../../../enums/game'

interface Props {
  onPress: (selected: string) => void
}

export default function TrueFalseButtons({ onPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BooleanButton onPress={() => onPress(BooleanOptionType.True)}>
          True
        </BooleanButton>
      </View>

      <View style={styles.buttonContainer}>
        <BooleanButton onPress={() => onPress(BooleanOptionType.False)}>
          False
        </BooleanButton>
      </View>
    </View>
  )
}
