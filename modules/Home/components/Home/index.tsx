import React, { useEffect, useMemo } from 'react'
import { View, Animated } from 'react-native'

import styles from './styles'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { RobotMenuSvg } from '../../../../shared/components/svg'
import { animateTiming } from '../../../../shared/helpers/animations'
import {
  StartButton,
  LabelAndTitleHeader,
} from '../../../../shared/components/ui-core'
import RobotFeedback, {
  FacialExpression,
} from '../../../../shared/components/svg/RobotFeedback'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function Home({
  startNewGame,
  game: { data, answers, stillFetchingData },
}: Props) {
  const homeEntryAnimatedValue = useMemo(() => new Animated.Value(0), [])
  const startButtonDisabled = stillFetchingData || (data.length && !answers[0])

  useEffect(() => {
    animateTiming(homeEntryAnimatedValue, 1, 300, 2300, true).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: homeEntryAnimatedValue }}>
        <LabelAndTitleHeader
          spacingOnTop
          label="Welcome to"
          title="Trivia Challenge"
        />
      </Animated.View>

      <RobotMenuSvg />

      <Animated.View style={{ opacity: homeEntryAnimatedValue }}>
        <StartButton onPress={startNewGame} disabled={!!startButtonDisabled}>
          Start
        </StartButton>
      </Animated.View>
    </View>
  )
}
