import React, { useEffect } from 'react'
import { View } from 'react-native'

import styles from './styles'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { RobotMenuSvg } from '../../../../shared/components/svg'
import {
  LabelAndTitleHeader,
  StartButton,
} from '../../../../shared/components/ui-core'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function Home({ startNewGame }: Props) {
  return (
    <View style={styles.container}>
      <LabelAndTitleHeader
        spacingOnTop
        label="Welcome to"
        title="Trivia Challenge"
      />

      <RobotMenuSvg />

      <StartButton onPress={startNewGame}>Start</StartButton>
    </View>
  )
}
