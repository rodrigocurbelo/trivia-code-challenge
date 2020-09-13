import React, { useEffect, useMemo } from 'react'
import { View, Animated } from 'react-native'

import styles from './styles'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import RobotNoInternet from '../../../../shared/components/svg/RobotNoInternet'
import {
  StartButton,
  LabelAndTitleHeader,
} from '../../../../shared/components/ui-core'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function NoInternet({
  startNewGame,
  game: { data, answers, stillFetchingData },
}: Props) {
  // Disables the button if it was already pressed.
  const buttonDisabled = stillFetchingData || (data.length && !answers[0])

  return (
    <View style={styles.container}>
      <LabelAndTitleHeader
        spacingOnTop
        label="Network error"
        title="Check your connection"
      />

      <RobotNoInternet />

      <StartButton onPress={startNewGame} disabled={!!buttonDisabled}>
        Try again
      </StartButton>
    </View>
  )
}
