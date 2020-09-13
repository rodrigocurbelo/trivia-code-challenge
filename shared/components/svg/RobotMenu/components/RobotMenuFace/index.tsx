import React, { useEffect, useMemo } from 'react'
import { G, Path, Ellipse } from 'react-native-svg'
import { Animated } from 'react-native'

import theme from '../../../../../theme'
import { getEyesAnimation } from '../../../../../helpers/animations'
import { ROBOT_MENU_TIMING } from '../../../../../constants/robotMenuAnimations'
import { animateTiming } from '../../../../../helpers/animations'
import {
  AnimatedPath,
  AnimatedGroup,
  AnimatedEllipse,
} from '../../../../ui-core'

export default function RobotMenuFace() {
  const [eyesAnimatedValue, pupilsXYAnimatedValue] = useMemo(
    () => [new Animated.Value(0), new Animated.ValueXY({ x: 0, y: 0 })],
    []
  )

  const {
    eyes,
    pupils: { lookAtBubble, lookAtButton },
  } = ROBOT_MENU_TIMING

  useEffect(() => {
    animateTiming(
      pupilsXYAnimatedValue,
      { x: 1, y: -3 },
      lookAtBubble.up,
      lookAtBubble.upDelay,
      true
    ).start(() => {
      animateTiming(
        pupilsXYAnimatedValue,
        { x: -1, y: 3 },
        lookAtBubble.down,
        lookAtBubble.downDelay,
        true
      ).start(() => {
        const triggerEyes = (toValue: number, delay = 0) => {
          animateTiming(
            eyesAnimatedValue,
            toValue,
            eyes.bouncing,
            delay,
            true
          ).start(() => triggerEyes(toValue === 1 ? 0 : 1))
        }

        const triggerPupils = (lookAtUser: boolean) => {
          animateTiming(
            pupilsXYAnimatedValue,
            { y: lookAtUser ? 0 : 3, x: 0 },
            lookAtButton.duration,
            lookAtUser
              ? lookAtButton.lookAtButtonDelay
              : lookAtButton.lookAtUserDelay,
            true
          ).start(() => triggerPupils(!lookAtUser))
        }

        triggerPupils(true)
        triggerEyes(1, eyes.bouncingDelay)
      })
    })
  }, [])

  return (
    <G>
      {/* Left eyebrow */}
      <AnimatedPath
        style={getEyesAnimation(eyesAnimatedValue, [0, -7])}
        d="M124.727 144.571L125.646 143.908C131.271 139.851 138.796 139.617 144.661 143.317L145.75 144.003"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth="5"
      />

      {/* Right eyebrow */}
      <AnimatedPath
        style={getEyesAnimation(eyesAnimatedValue, [0, -7])}
        d="M158.818 144.571L159.737 143.908C165.362 139.851 172.887 139.617 178.752 143.317L179.841 144.003"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth="5"
      />

      {/* Eyes */}
      <AnimatedGroup style={getEyesAnimation(eyesAnimatedValue, [0, -2])}>
        {/* Left eye */}
        <Ellipse
          cx={134.954}
          cy={166.135}
          rx={11.3636}
          ry={11.3495}
          fill={theme.robot.facialFeaturesColor}
        />

        {/* Left eye pupil */}
        <AnimatedEllipse
          cx={134.955}
          cy={166.675}
          rx={4.54546}
          ry={4.53979}
          fill={theme.robot.headColor}
          style={{
            transform: pupilsXYAnimatedValue.getTranslateTransform(),
          }}
        />

        {/* Right eye */}
        <Ellipse
          cx={171.318}
          cy={166.135}
          rx={11.3636}
          ry={11.3495}
          fill={theme.robot.facialFeaturesColor}
        />

        {/* Right eye pupil */}
        <AnimatedEllipse
          cx={171.318}
          cy={166.675}
          rx={4.54546}
          ry={4.53979}
          fill={theme.robot.headColor}
          style={{
            transform: pupilsXYAnimatedValue.getTranslateTransform(),
          }}
        />
      </AnimatedGroup>

      {/* Mouth */}
      <Path
        d="M172.454 190.536V190.536C162.116 198.067 148.222 198.501 137.434 191.629L137.227 191.497"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth="5"
      />
    </G>
  )
}
